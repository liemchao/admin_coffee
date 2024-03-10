import axiosClient from 'src/configs/axios'
import { UserDataType } from 'src/context/types'

const accountService = {
  getProfile: async (): Promise<UserDataType> => axiosClient.get('/auth/profile')
}

export default accountService
