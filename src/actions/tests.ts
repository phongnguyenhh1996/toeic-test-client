import {
  GO_TO_QUESTION
} from "../constants";

export const goToQuestion = (questionNum: number) => {
  return {
    type: GO_TO_QUESTION,
    toQuestion: questionNum
  }
}
