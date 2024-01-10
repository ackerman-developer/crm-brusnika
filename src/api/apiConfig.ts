import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'http://82.97.243.12:5000/api'
const REQUEST_TIMEOUT = 5000

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  })

  return api
}
