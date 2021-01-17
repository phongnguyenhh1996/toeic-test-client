import { UserInfo } from "../components/Header/Header";
import API from "../utils/axios";

export const userLogin = (data: UserInfo) => API.post('/auth/signin', {
  username: data.username,
  password: data.password
})
