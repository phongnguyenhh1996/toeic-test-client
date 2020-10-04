import { UserInfo } from "../containers/Login";
import API from "../utils/axios";

export const userLogin = (data: UserInfo) => API.post('/auth', {}, {
    auth: {
        username: data.email,
        password: data.password
    }
})
