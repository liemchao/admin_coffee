import axiosClient from "@/config/axios";
import { StoreCatgory } from "@/types/entities/catgory.entity";

const categoryService = {
  getAll: async (): Promise<StoreCatgory[]> => axiosClient.get("/category"),
};

export default categoryService;
