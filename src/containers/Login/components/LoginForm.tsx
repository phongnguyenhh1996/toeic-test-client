import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { userLogin } from '../../../actions/user';
import CustomButton from '../../../components/CustomButton';
import { UserInfo } from '../../../components/Header/Header';
import { theme } from '../../../utils/theme';
import { useHistory } from 'react-router';
import { useSnackbar } from 'notistack';

export const TextFieldLogin = styled(TextField)`
  margin-bottom: 30px;
  display: block;
  .MuiFormLabel-root.MuiInputLabel-shrink {
    color: ${theme.backgroundSecondary};
  }
  .MuiFormLabel-root.MuiInputLabel-shrink.Mui-error {
    color: ${theme.backgroundErrorInput};
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
  .MuiInput-underline.Mui-error:after {
    border-bottom-color: ${theme.backgroundErrorInput};
}
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid ${theme.backgroundSecondary};
  }
`;

export const LoginForm : React.FC = () => {
  const { enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch()
    const history = useHistory()
    const isloading = useSelector((state : any) => state.user.isLoading);
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
      const error : UserInfo = {
        username: '',
        password: ''
      }
      if (userInfo.username === '') {
        error.username = "This field is required!"
      }
      if (userInfo.password === '') {
        error.password = "This field is required!"
      }
      setError(error)
      if (!error.password && !error.username) {
        dispatch(userLogin(userInfo, {
          onSuccess: () => {
            enqueueSnackbar('Login success!',{
              anchorOrigin: {
                vertical:'top',
                horizontal:'right'
              },
              variant:'success'
            });
            history.push('/')

          },
          onFailure: (err: any) => {
            if (err?.response?.status === 401) {
              enqueueSnackbar('The Username or Password is incorrect!',{
                anchorOrigin: {
                  vertical:'top',
                  horizontal:'right'
                },
                variant:'error'
              });
            }
          }
        }))
      }
    }

    const handleInput = (e: any) => {
      setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }


    return (
        <form onSubmit={handleSubmit} onChange={handleInput}>
            <TextFieldLogin error={!!inputError.username} autoFocus name="username" label='USERNAME' helperText={inputError.username} />
            <TextFieldLogin error={!!inputError.password} name="password" label='PASSWORD' type="password" helperText={inputError.password} />
            <CustomButton $isLoading={isloading} type="submit" theme="green" $borderCircle className="btnLogin" disabled={isloading}>
              LOGIN
            </CustomButton>
        </form>
    )
}
