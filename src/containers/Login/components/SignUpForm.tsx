import React from 'react'
import CustomButton from '../../../components/CustomButton';
import { TextFieldLogin } from './LoginForm';

export const SignUpForm : React.FC = () => {
    return (
        <form >
            <TextFieldLogin autoFocus label="USERNAME" />
            <TextFieldLogin label="EMAIL" />
            <TextFieldLogin label="PASSWORD" type="password"/>
            <CustomButton type="submit" theme="green" borderCircle className="btnLogin">
                SIGN UP
            </CustomButton>
        </form>
    )
}
