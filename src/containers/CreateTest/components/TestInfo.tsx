import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components'

import UploadImg from '../../../assets/images/image_upload.svg'
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

interface Props {

}

const currencies = [
    {
      value: '0',
      label: 'Part 1',
    },
    {
      value: '1',
      label: 'Part 2',
    },
    {
      value: '2',
      label: 'Part 3',
    },
    {
      value: '3',
      label: 'Part 4',
    },
  ];

export const TestInfo : React.FC<Props> = () => {
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
            <Input size="small" id="outlined-basic" select rows={4} label="Test type" variant="outlined">
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </Input>
            <Input size="small" id="outlined-basic" multiline rows={2} label="Test description" variant="outlined" />
        </Wrapper>
    )
}
