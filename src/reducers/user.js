import * as TYPES from "../constants";

const initialState = {
  token: localStorage.getItem('token'),
  isFailed: false,
  detail: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      }
    case TYPES.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: localStorage.getItem('token'),
        isFailed: false,
        detail: action.data
      }
    case TYPES.USER_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: true
      }
    default:
      return state
  }
}

export default userReducer;
