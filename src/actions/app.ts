import { UPLOAD_PROGRESS, ITEM_UPLOAD_DONE } from "../constants";

export const uploadProgress = (uploadProgress: any) => {
  return {
    type: UPLOAD_PROGRESS,
    uploadProgress
  };
};

export const itemUploadDone = () => {
  return {
    type: ITEM_UPLOAD_DONE,
  };
};
