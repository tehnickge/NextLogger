// utils/axios.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Создаем экземпляр Axios с базовым URL
const axiosInstance = axios.create({
  baseURL: "http://89.179.242.42:3000/api", // Протокол обязательно!
  headers: {
    "Content-Type": "application/json",
  },
});
// Тип для ответа
export interface ApiResponse<T> {
  data: T;
  status: number;
}

// Функция для выполнения GET-запроса с типом ответа
export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.get(url, config);

    return response.data; // Возвращаем данные напрямую
  } catch (error) {
   
    throw error;
  }
};

// Функция для выполнения POST-запроса с типом ответа
export const postRequest = async <T>(
  url: string,
  data: object,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(
      url,
      data,
      config
    );

    if (!response.data?.data) {
      throw new Error("Response does not contain data");
    }

    return response.data.data;
  } catch (error: any) {
    throw error;
  }
};

export default axiosInstance;
