import React from 'react'
import { Styled } from "./styled"
import LOGO from "../../assets/images/TOEIC_ICON.svg"
import { TextField, InputAdornment, Button } from '@material-ui/core'
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import bgRightSide from "../../assets/images/learning-english-online.jpg"

const Login: React.FC = () => {
  return (
    <Styled.Login>
      <Styled.Login__Inner>
        <Styled.Login__Side>
          <img width={180} height={100} src={LOGO} alt="Logo" />
          <Styled.Login__Form>
            <TextField
              autoFocus
              id="input-with-icon-textfield"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineUser />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="input-with-icon-textfield"
              label="Password"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineLock />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" color="primary">
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

export default Login
