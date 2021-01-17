import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { get, range } from 'lodash'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import UploadImg from '../../../assets/images/image_upload.svg'
import { TEST_TYPE, TEST_TYPE_INFO } from '../../../constants'
import { theme } from '../../../utils/theme'

export const Wrapper : any = styled.div`
    background: #FEFEFE;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const ImageUploadWrapper = styled.div`
    background: #E5E5E5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 10px;
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

    const handleChangeType = (testType: number, testPart?: number) => () => {
        history.replace('/create-test', {testType, testPart})
    }

    return (
        <Wrapper>
            <ImageUploadWrapper>
                <img src={UploadImg} alt="upload"/>
                <AddImg>
                    <FaPlus />
                    Add image
                </AddImg>
            </ImageUploadWrapper>
            <Input size="small" id="outlined-basic" label="Test name" variant="outlined" />
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
            <Input size="small" id="outlined-basic" multiline rows={2} label="Test description" variant="outlined" />
        </Wrapper>
    )
}
