import React, { useState } from 'react'
import { Styled } from "./Header.styled";
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import { userLogin } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

export interface UserInfo {
  email: string,
  password: string
}

interface HeaderProps {
  userLogin(userInfor: UserInfo, push: any): void
  user: any
}

const Header: React.FC<HeaderProps> = ({ userLogin, user }) => {

  const [userinfo, setUserinfo] = useState<UserInfo>({} as UserInfo)
  const history = useHistory();
  const { isLoading } = user;
  const handleInputChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement
    setUserinfo({...userinfo, [name]: value})
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    userLogin(userinfo, history.push);
    console.log(userinfo);
  }

  return (
    <Styled.Header>
      <Container fixed>
        <Grid container justify="space-between" alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Styled.Header__Brand to="/">
              <Logo />
            </Styled.Header__Brand>
          </Grid>
          <Grid item xs>
              <Styled.Header__navigation>
                <Styled.Header__navigationItem>
                  <Link to="/login">
                    <Button color="primary">Login</Button>
                  </Link>
                </Styled.Header__navigationItem>
                <Styled.Header__navigationItem>
                  <Link to="/sign-up">
                    <Button variant="outlined" color="primary">Sign Up</Button>
                  </Link>
                </Styled.Header__navigationItem>
              </Styled.Header__navigation>
          </Grid>
        </Grid>
      </Container>
    </Styled.Header>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

const mapDispatchToProps = {
  userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
