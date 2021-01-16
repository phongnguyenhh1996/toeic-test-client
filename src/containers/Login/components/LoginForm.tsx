import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react'
import styled from 'styled-components';
import CustomButton from '../../../components/CustomButton';
import { UserInfo } from '../../../components/Header/Header';
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

    const [userInfo, setUserInfo] = useState<UserInfo>({
      username: '',
      password: ''
    })

    const [inputError, setError] = useState<UserInfo>({
      username: '',
      password: ''
    })

    const handleSubmit = (e: any) => {
      e.preventDefault();
      // const error : UserInfo = {
      //   username: '',
      //   password: ''
      // }
      // if (!userInfo.username) {
      //   error.username = "This field is required!"
      // }
      // if (!userInfo.password) {
      //   error.password = "This field is required!"
      // }

      // setError(error)
    }

    const handleInput = (e: any) => {
      setUserInfo({...userInfo, [e.target.name]: e.target.value})
      console.log(e.target.name, e.target.value);
      
    }

    return (
        <form onSubmit={handleSubmit} onChange={handleInput}>
            <TextFieldLogin autoFocus name="username" label="USERNAME" />
            <TextFieldLogin name="password" label="PASSWORD" type="password"/>
            <CustomButton type="submit" theme="green" borderCircle className="btnLogin">
                LOGIN
            </CustomButton>
        </form>
    )
}
