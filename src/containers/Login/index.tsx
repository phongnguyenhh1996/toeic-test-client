
import Grid from '@material-ui/core/Grid'
import React from 'react'
import { Link } from 'react-router-dom'
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
  TextFieldLogin,
  ContainerForm ,
  SocialsBtnGround,
  RightContentBottom} from './styled'
export interface UserInfo {
  email: string,
  password: string
}

interface LoginProps {
 
}

const Login: React.FC<LoginProps> = () => {

  
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
                  <strong>EasyTOEIC</strong>
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
                Login
              </Heading>
              <RegisterSuggest>
                Don’t have an account? <Link to="/sign-up">Create your account</Link>, it takes less than a minute
              </RegisterSuggest>
              <ContainerForm>
                  <form action="" >
                  <TextFieldLogin  label="EMAIL" />
                  <TextFieldLogin  label="PASSWORD" />
                  </form>
                  <CustomButton theme="green" borderCircle={true} className="btnLogin">
                    LOGIN
                  </CustomButton>
              </ContainerForm>
              <RightContentBottom
                
              >
                 <RegisterSuggest>
                 Login with social media
              </RegisterSuggest>
                  <SocialsBtnGround >
                    <CustomButton borderCircle={true} startIcon={<FaFacebookF/>} theme="facebook"  className="btnLoginIcon">
                      facebook
                    </CustomButton>
                    <CustomButton borderCircle={true} startIcon={<FaTwitter/>} theme="twitter" className="btnLoginIcon">
                      twitter
                    </CustomButton>
                    <CustomButton borderCircle={true} startIcon={<FaGooglePlusG/>} theme="google" className="btnLoginIcon">
                      google +
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







