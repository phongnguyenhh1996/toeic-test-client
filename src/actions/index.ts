import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from "../constants";
import { UserInfo } from "../components/Header/Header";

export const userLogin = (userInfo: UserInfo, push: any) => {
  return {
    type: USER_LOGIN_REQUEST,
    data: userInfo,
    push
  }
}

export const userLoginSuccess = (userData: any) => {
  return {
    type: USER_LOGIN_SUCCESS,
    data: userData
  }
}

export const userLoginFailed = () => {
  return {
    type: USER_LOGIN_FAILED
  }
}
