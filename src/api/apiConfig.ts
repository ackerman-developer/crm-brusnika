import axios, { AxiosInstance } from "axios";

interface Api {
  withCredentials: boolean;
  baseURL?: string;
}

const api: Api = {
  withCredentials: true,
  baseURL: process.env.SERVER_API_URL,
};

const apiConfig: AxiosInstance = axios.create(api);

export default apiConfig
