import TextField from '@material-ui/core/TextField';
import React from 'react'
import styled from 'styled-components';
import CustomButton from '../../../components/CustomButton';
import { theme } from '../../../utils/theme';

export const TextFieldLogin = styled(TextField)`
  margin-bottom: 30px;
  display: block;
  .MuiFormLabel-root.MuiInputLabel-shrink {
    color: ${theme.backgroundSecondary};
  }
  .MuiInputLabel-formControl {
    top: -16px;
    font-size: 14px;
    font-weight: 500;
  }
  .MuiInputBase-root {
    display: block;
  }
  .MuiInput-underline::after {
    border-bottom: 2px solid ${theme.backgroundSecondary};
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid ${theme.backgroundSecondary};
  }
`;

export const LoginForm : React.FC = () => {
    return (
        <form >
            <TextFieldLogin autoFocus label="USERNAME" />
            <TextFieldLogin label="PASSWORD" type="password"/>
            <CustomButton type="submit" theme="green" borderCircle className="btnLogin">
                LOGIN
            </CustomButton>
        </form>
    )
}
