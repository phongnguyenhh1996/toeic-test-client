import * as TYPES from "../constants";

const initialState = {
  token: localStorage.getItem('token')
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: localStorage.getItem('token')
      }
    default:
      return state
  }
}

export default userReducer;