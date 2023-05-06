import axios, { AxiosRequestConfig } from 'axios'

const baseConfig: AxiosRequestConfig = {
	baseURL: 'http://localhost:8080'
}
export default function useRestService(config: AxiosRequestConfig = {}) {
	return axios.create({ baseURL: baseConfig.baseURL, ...config })
}