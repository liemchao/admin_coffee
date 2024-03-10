import axiosInstance from "@/config/axios";
import setHeader from "@/utils/setheader";

const getProductsAPI = async (token: string) => {
  try {
    const response = await axiosInstance.get(
      "/product",
      setHeader({ Authorization: `Bearer ${token}` })
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export { getProductsAPI };

const getProductDetailAPI = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/product/${id}`
      // setHeader({ Authorization: `Bearer ${token}` })
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export { getProductDetailAPI };

const getProductsByCategoryAPI = async (name: string) => {
  try {
    const response = await axiosInstance.get(
      `/category?name=${name}`
      // setHeader({ Authorization: `Bearer ${token}` })
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export { getProductsByCategoryAPI };
