import React, { useState } from 'react'
import { Styled } from "./styled"
import LOGO from "../../assets/images/TOEIC_ICON.svg"
import { TextField, InputAdornment, Button } from '@material-ui/core'
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import bgRightSide from "../../assets/images/learning-english-online.jpg"
import { userLogin } from '../../actions';
import { useHistory } from "react-router";
import { connect } from 'react-redux';

export interface UserInfo {
  email: string,
  password: string
}

interface LoginProps {
  userLogin(userInfor: UserInfo, push: any): void
  user: any
}

const Login: React.FC<LoginProps> = ({ userLogin, user }) => {

  const history = useHistory();
  
  const [userinfo, setUserinfo] = useState<UserInfo>({} as UserInfo)
  
  const { isLoading } = user;

  const handleInputChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement
    setUserinfo({...userinfo, [name]: value})
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    userLogin(userinfo, history.push);
  }

  return (
    <Styled.Login>
      <Styled.Login__Inner>
        <Styled.Login__Side>
          <img width={180} height={100} src={LOGO} alt="Logo" />
          <Styled.Login__Form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              onChange={handleInputChange}
              id="input-with-icon-textfield"
              name="email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineUser />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={handleInputChange}
              id="input-with-icon-textfield"
              label="Password"
              type="password"
              name="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineLock />
                  </InputAdornment>
                ),
              }}
            />
            <Button disabled={isLoading} type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Styled.Login__Form>

        </Styled.Login__Side>
        <Styled.Login__Side right>
          <Styled.Login__Right>
            <img width="100%" src={bgRightSide} alt="Right Banner Background" />
          </Styled.Login__Right>
        </Styled.Login__Side>
      </Styled.Login__Inner>
    </Styled.Login>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

const mapDispatchToProps = {
  userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)