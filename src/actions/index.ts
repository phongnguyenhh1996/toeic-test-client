import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants";
import { UserInfo } from "../components/Header/Header";

export const userLogin = (userInfo: UserInfo, push: any) => {
  return {
    type: USER_LOGIN_REQUEST,
    data: userInfo,
    push
  }
}

export const userLoginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS
  }
}