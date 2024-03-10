import axiosClient from 'src/configs/axios'
import { Countdown } from '../types'

const countdownService = {
  getAll: async (): Promise<Countdown[]> => {
    return axiosClient.get(`/countdown`)
  }
}

export default countdownService
