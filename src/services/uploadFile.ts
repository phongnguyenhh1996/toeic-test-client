import axios from 'axios'
import { UPLOAD_URL } from '../utils/apiUrl';

const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', '429544576547882')
    formData.append('upload_preset', 'l5dm0p6z')

    try {
        const res = await axios.post(UPLOAD_URL, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });

        if (res.status === 200) {
            return res.data.url
        }
    } catch (e) {
        console.log(e);
    }
    
}

export default uploadFile