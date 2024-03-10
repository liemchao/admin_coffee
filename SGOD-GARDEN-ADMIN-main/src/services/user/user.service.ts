import axiosClient from 'src/configs/axios'
import { Account } from '../types'

const userService = {
  getAll: async (): Promise<Account[]> => axiosClient.get('/auth/users')
}

export default userService
