import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from "../constants";
import { UserInfo } from "../components/Header/Header";

export const userRegister = (userInfo: UserInfo, callbacks: any) => {
  return {
    type: USER_REGISTER_REQUEST,
    data: userInfo,
    callbacks,
  };
};
export const userRegisterSuccess = (userData: any) => {
  return {
    type: USER_REGISTER_SUCCESS,
    data: userData,
  };
};

export const userRegisterFailed = () => {
  return {
    type: USER_REGISTER_FAILED,
  };
};
export const userLogin = (userInfo: UserInfo, callbacks?: any) => {
  return {
    type: USER_LOGIN_REQUEST,
    data: userInfo,
    callbacks,
  };
};

export const userLoginSuccess = (userData: any) => {
  return {
    type: USER_LOGIN_SUCCESS,
    data: userData,
  };
};

export const userLoginFailed = () => {
  return {
    type: USER_LOGIN_FAILED,
  };
};
