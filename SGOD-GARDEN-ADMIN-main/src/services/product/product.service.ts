import axiosClient from 'src/configs/axios'
import { Product } from '../types'
import axiosClientFormData from 'src/configs/axiosSendFormData'

const productService = {
  getProductId: async (id: string): Promise<Product> => {
    return axiosClient.get(`/product/${id}`)
  },
  getAll: async (): Promise<Product[]> => {
    return axiosClient.get(`/product`)
  },
  createProduct: async (data: FormData): Promise<Product> => axiosClientFormData.post('/product', data)
}

export default productService
