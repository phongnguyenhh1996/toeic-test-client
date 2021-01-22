import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { get, range } from 'lodash'
import React from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { changeTestInfo } from '../../../actions/tests'

import UploadImg from '../../../assets/images/image_upload.svg'
import { TEST_TYPE, TEST_TYPE_INFO } from '../../../constants'
import { theme } from '../../../utils/theme'
import { MediaWrapper, RemoveMedia } from '../style'

export const Wrapper : any = styled.div`
    background: #FEFEFE;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const ImageUploadWrapper = styled.label`
    background: #E5E5E5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 10px;
    cursor: pointer;
`

const AddImg = styled.div`
    margin-top: 10px;
    font-size: 16px;
    color: ${theme.textDarkPrimary};
    display: flex;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`
const FileInput = styled.input`
    position: absolute;
    display: none;
`

const AvatarImg = styled.img`
    width: 285px;
    height: 174px;
    object-fit: cover;
    margin-bottom: 10px;
    box-shadow: 0px 0px 4px  rgba(0, 0, 0, 0.1);
    background: #fff;
`
interface InputProps {
    bg?: string;
}

export const Input = styled(TextField)<InputProps>`
    width: 100%;
    margin-bottom: 10px;
    .MuiOutlinedInput-notchedOutline {
        border-color: #E4E4E4;
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.textPrimary2};
    }
    .Mui-focused fieldset{
        border-color: ${theme.textPrimary2} !important;
    }
    label.Mui-focused, label.MuiInputLabel-shrink {
        color: ${theme.textPrimary2};
    }
    .MuiInputBase-root {
        background-color: ${props => props.bg || 'transparent'};
    }
`
interface TestInfoProps {
    testType: number
    testPart: number
}


export const TestInfo : React.FC<TestInfoProps> = ({ testType, testPart}) => {

    const history = useHistory()
    const dispatch = useDispatch()

    const testName = useSelector(state => get(state, 'tests.test.name', ''))
    const testDescription = useSelector(state => get(state, 'tests.test.description', ''))
    const avatarSrc = useSelector(state => get(state, 'tests.test.avatarSrc'))

    const handleChangeType = (testType: number, testPart?: number) => () => {
        history.replace('/create-test', {testType, testPart})
    }

    const onInputChange = (e: any) => {
        dispatch(changeTestInfo(e.target.value, e.target.name))
    }

    const onUploadImage = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
            dispatch(changeTestInfo([reader.result], 'avatarSrc'))
        }
    }

    const removeImage = () => {
        dispatch(changeTestInfo(null, 'avatarSrc'))
    }

    return (
        <Wrapper>
            {avatarSrc &&
                <MediaWrapper width="auto">
                    <AvatarImg src={avatarSrc} alt="Uploaded img" />
                    <RemoveMedia onClick={removeImage}>
                        <FaTimes />
                    </RemoveMedia>
                </MediaWrapper>
            }
            {!avatarSrc &&
                <ImageUploadWrapper>
                    <img src={UploadImg} alt="upload"/>
                    <AddImg>
                        <FaPlus />
                        Add image
                    </AddImg>
                    <FileInput
                        onChange={onUploadImage}
                        name="imageFile"
                        type="file"
                        accept="image/*"
                    />
                </ImageUploadWrapper>
            }
            <Input
                onChange={onInputChange}
                name="name"
                size="small"
                id="outlined-basic"
                label="Test name"
                variant="outlined"
                value={testName}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Input size="small" id="outlined-basic" value={testType} select rows={4} label="Test type" variant="outlined">
                        {Object.values(TEST_TYPE).map((type) => type !== TEST_TYPE.PART ? (
                            <MenuItem onClick={handleChangeType(type, undefined)} key={type} value={type}>
                                {get(TEST_TYPE_INFO, `${type}.title`, '').split(' ')[0]}
                            </MenuItem>
                        ) : (
                            <MenuItem onClick={handleChangeType(type, 0)} key={type} value={type}>
                                Part test
                            </MenuItem>
                        ))}
                    </Input>
                </Grid>
                {testPart >= 0 && (
                    <Grid item xs={6}>
                        <Input size="small" id="outlined-basic" value={testPart} select rows={4} label="Test type" variant="outlined">
                            {range(0, 7).map((numb: number) => (
                                <MenuItem onClick={handleChangeType(testType, numb)} key={numb} value={numb}>
                                    Part {numb + 1}
                                </MenuItem>
                            ))}
                        </Input>
                    </Grid>
                )}
            </Grid>
            <Input
                onChange={onInputChange}
                name="description"
                size="small"
                id="outlined-basic"
                multiline
                rows={2}
                label="Test description"
                variant="outlined"
                value={testDescription}
            />
        </Wrapper>
    )
}
