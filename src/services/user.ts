import { UserInfo ,UserInfoRegister} from "../components/Header/Header";
import API from "../utils/axios";

export const userLogin = (data: UserInfo) => API.post('/auth/signin', {
  username: data.username,
  password: data.password
})

export const userRegister = (data:UserInfoRegister) => API.post('/auth/signup',{
    username:data.username,
    password:data.password,
    email:data.email
}) 