import axiosClient from 'src/configs/axios'
import { LoginResponse, ParamLogin } from '../types'

const authService = {
  login: async (params: ParamLogin): Promise<LoginResponse> => axiosClient.post('/auth/login', params)
}

// const loginAPI = async({username,password}:any) =>{
//     const data = {
//         username:username,
//         password:password,
//     }
//     try {
//         const respone = axiosInstance.post("/auth/login",data)
//         return respone;
//     } catch (error:any) {
//         return error.response
//     }
// }
export default authService
