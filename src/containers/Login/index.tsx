
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Background } from './components/Background';
import CustomButton from "../../components/CustomButton";
import {FaFacebookF,FaTwitter,FaGooglePlusG} from "react-icons/fa";
import {
  Heading,
  Inner,
  LeftContent,
  LeftInner,
  RegisterSuggest,
  RightContent,
  SubHeading,
  Wrapper,
  ContainerForm ,
  SocialsBtnGround,
  RightContentBottom} from './styled'
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import LOGO from "../../assets/images/logo.svg";

interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login'


  return (
    <Wrapper>
      <Background />
      <Inner>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <LeftContent>
              <LeftInner>
                <Heading color="#fff">
                  welcome to<br/>
                  <strong><img width="300px" src={LOGO} alt="Logo" /></strong>
                </Heading>
                <SubHeading color="#fff">
                  Place to practice your TOEIC skills.<br/>
                  Prepare for the real test !
                </SubHeading>
              </LeftInner>
            </LeftContent>
          </Grid>
          <Grid item xs={6}>
            <RightContent>
              <Heading color="#000">
                {isLoginPage ? 'Login' : 'Sign up'}
              </Heading>
              {isLoginPage && (
                <RegisterSuggest>
                  Don’t have an account? <Link to="/sign-up">Create your account</Link>, it takes less than a minute
                </RegisterSuggest>
              )}
              <ContainerForm>
                {isLoginPage ? <LoginForm /> : <SignUpForm />}
              </ContainerForm>
              <RightContentBottom>
                  <RegisterSuggest>
                    Login with social media
                  </RegisterSuggest>
                  <SocialsBtnGround >
                    <CustomButton $borderCircle={true} startIcon={<FaFacebookF/>} theme="facebook"  className="btnLoginIcon">
                      Facebook
                    </CustomButton>
                    <CustomButton $borderCircle={true} startIcon={<FaTwitter/>} theme="twitter" className="btnLoginIcon">
                      Twitter
                    </CustomButton>
                    <CustomButton $borderCircle={true} startIcon={<FaGooglePlusG/>} theme="google" className="btnLoginIcon">
                      Google +
                    </CustomButton>
                  </SocialsBtnGround>
              </RightContentBottom>
            </RightContent>
          </Grid>
        </Grid>
      </Inner>
    </Wrapper>
  )
}

export default Login







