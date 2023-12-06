import axios, { AxiosInstance } from "axios";

interface ApiConfig {
  withCredentials: boolean;
  baseURL?: string;
}

const apiConfig: ApiConfig = {
  withCredentials: true,
  baseURL: process.env.SERVER_API_URL,
};

const api: AxiosInstance = axios.create(apiConfig);

export default api
