import React from 'react'
import { Styled } from "./Header.styled";
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import { userLogin } from "../../actions/user";
import { connect } from "react-redux";
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import Login from '../../containers/Login';

export interface UserInfo {
  username: string,
  password: string
}

interface HeaderProps {
  userLogin(userInfor: UserInfo, push: any): void
  user: any
}

const Header: React.FC<HeaderProps> = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                  <Button color="primary" onClick={handleClickOpen}>Login</Button>
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
      <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <Login />
        </DialogContent>
      </Dialog>
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
