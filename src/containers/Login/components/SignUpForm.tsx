import React, { useState } from 'react'
import CustomButton from '../../../components/CustomButton';
import { TextFieldLogin } from './LoginForm';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { UserInfoRegister } from '../../../components/Header/Header';
import { userRegister } from '../../../actions/user';

export const SignUpForm : React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [userInfo, setUserInfo] = useState<UserInfoRegister>({
      username: '',
      password: '',
      email:''
    })

    const [inputError, setError] = useState<UserInfoRegister>({
      username: '',
      password: '',
      email:''
    })
    
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const error : UserInfoRegister = {
        username: '',
        password: '',
        email:''
      }
      if (userInfo.username === '') {
        error.username = "This field is required!"
      }
      if (userInfo.password === '') {
        error.password = "This field is required!"
      }
      if (userInfo.email === '') {
        error.email = "This field is required!"
      }
      setError(error)
      if (!error.password && !error.username && !error.email) {
        dispatch(userRegister(userInfo, {
          onSuccess: () => {
            history.push('/')
          },
          onFailure: () => {
            // hiện thông báo lỗi
          },
          onFinish: () => {
            // hiện thông báo lỗi
          }
        }))
       
      }
    }

    const handleInput = (e: any) => {
      setUserInfo({...userInfo, [e.target.name]: e.target.value})
      console.log(e.target.name, e.target.value);
    }
    return (
        <form onSubmit={handleSubmit} onChange={handleInput}>
            <TextFieldLogin autoFocus label="USERNAME" name="username" error={!!inputError.username} helperText={inputError.username} />
            <TextFieldLogin label="EMAIL" name="email"  error={!!inputError.email} helperText={inputError.email}/>
            <TextFieldLogin label="PASSWORD" name="password" type="password" error={!!inputError.password} helperText={inputError.password}/>
            <CustomButton type="submit" theme="green" borderCircle className="btnLogin">
                SIGN UP
            </CustomButton>
        </form>
    )
}
