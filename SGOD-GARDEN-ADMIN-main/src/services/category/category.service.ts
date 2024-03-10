import axiosClient from 'src/configs/axios'
import axiosClientFormData from 'src/configs/axiosSendFormData'
import { StoreCatgory } from 'src/types/entities/catgory.entity'

const categoryService = {
  getAll: async (): Promise<StoreCatgory[]> => axiosClient.get('/category'),
  createCategory: async (data: FormData): Promise<StoreCatgory> => axiosClientFormData.post('/category', data)
}

export default categoryService
