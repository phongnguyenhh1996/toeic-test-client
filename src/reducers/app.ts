import * as CONSTANT from "../constants";
import produce from "immer"

interface IUploadProgress {
  total: number
  done: number
  fileName: string
  progress: number
}

interface IInitialState {
  uploadProgress: IUploadProgress
}

const initialState: IInitialState = {
  uploadProgress: {
    total: 0,
    done: 0,
    fileName: '',
    progress: 0
  }
}

const appReducer = (state = initialState, action: any) =>
  produce(state, (draft: IInitialState) => {
    switch (action.type) {
      case CONSTANT.UPLOAD_PROGRESS:
        draft.uploadProgress = {...draft.uploadProgress, ...action.uploadProgress}
        break
      case CONSTANT.ITEM_UPLOAD_DONE:
        draft.uploadProgress.done += 1
        break
      default:
        break;
    }
  })

export default appReducer;
