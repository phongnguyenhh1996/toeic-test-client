import * as TYPES from "../constants";

const initialState = {
  currentQuestion: 1

}

const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GO_TO_QUESTION:
      return {
        ...state,
        currentQuestion: action.toQuestion
      }
    default:
      return state
  }
}

export default testsReducer;
