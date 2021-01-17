import * as CONSTANT from "../constants";

const initialState = {
  currentQuestion: 1,
  test: {}
}

const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANT.GO_TO_QUESTION:
      return {
        ...state,
        currentQuestion: action.toQuestion
      }
    case CONSTANT.INIT_TEST:
      return {
        ...state,
        test: action.test
      }
    default:
      return state
  }
}

export default testsReducer;
