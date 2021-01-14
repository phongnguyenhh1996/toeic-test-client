import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  GO_TO_QUESTION
} from "../constants";
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

export const goToQuestion = (questionNum: number) => {
  return {
    type: GO_TO_QUESTION,
    toQuestion: questionNum
  }
}