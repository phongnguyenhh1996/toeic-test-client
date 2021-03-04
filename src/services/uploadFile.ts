import axios from 'axios'
import { UPLOAD_URL } from '../utils/apiUrl';
import store from '../store';
import { uploadProgress } from '../actions/app';

const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', '429544576547882')
    formData.append('upload_preset', 'l5dm0p6z')

    const config = {
      onUploadProgress: function(progressEvent: any) {
        const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
        store.dispatch(uploadProgress({fileName: file.name, progress: percentCompleted}))
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    try {
        const res = await axios.post(UPLOAD_URL, formData, config);
        if (res.status === 200) {
            return res.data.url
        }
    } catch (e) {
        console.log(e);
    }

}

export default uploadFile
