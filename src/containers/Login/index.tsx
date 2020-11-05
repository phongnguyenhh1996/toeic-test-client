import React, { useState, useEffect } from 'react'
import { Styled } from "./styled"
import { TextField, InputAdornment, Button, CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { userLogin } from '../../actions';
import { useHistory } from "react-router";
import { connect } from 'react-redux';
import { isEmpty } from "lodash";
import { usePrevious } from '../../utils/hooks';

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
  const [validation, setValidation]: any = useState({})
  const [openAlert, setOpen] = useState<boolean>(false);

  const { isLoading, isFailed } = user;
  const prevIsFailed = usePrevious(isFailed)
  const handleInputChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement
    setUserinfo({...userinfo, [name]: value})
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let validation: any = {}
    if (!userinfo.email) validation.email = "Username is required!"
    if (!userinfo.password) validation.password = "Password is required!"
    setValidation(validation)
    if (isEmpty(validation)) {
      userLogin(userinfo, history.push);
    }
  }

  useEffect(() => {
    if (prevIsFailed === false && isFailed) {
      handleClick()
    }
  }, [isFailed, prevIsFailed])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Styled.Login>
      <Styled.Login__Inner>
        <Styled.Login__Side>
          <Styled.Login__Form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              autoFocus
              onChange={handleInputChange}
              id="input-with-icon-textfield"
              name="email"
              label="Username"
              error={validation.email}
              helperText={validation.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineUser />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              onChange={handleInputChange}
              id="input-with-icon-textfield"
              label="Password"
              type="password"
              name="password"
              error={validation.password}
              helperText={validation.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineLock />
                  </InputAdornment>
                ),
              }}
            />
            <Button disabled={isLoading} type="submit" variant="contained" color="primary">
              {isLoading ? <CircularProgress size="24px" color="secondary" /> : 'Login'}
            </Button>
          </Styled.Login__Form>
        </Styled.Login__Side>
      </Styled.Login__Inner>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Username or password is incorrect!
        </Alert>
      </Snackbar>
    </Styled.Login>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user
})

const mapDispatchToProps = {
  userLogin
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
