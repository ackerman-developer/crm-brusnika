import axios, { AxiosInstance } from "axios";

interface Api {
  withCredentials: boolean;
  baseURL?: string;
}

const BACKEND_URL = '/api'

const api: Api = {
  withCredentials: true,
  baseURL: BACKEND_URL,
};

const apiConfig: AxiosInstance = axios.create(api);

export default apiConfig
