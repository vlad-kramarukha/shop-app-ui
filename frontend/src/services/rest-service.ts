import axios, { AxiosRequestConfig } from 'axios'

const baseConfig: AxiosRequestConfig = {
	baseURL: 'http://localhost:8080'
}
export default function useRestService(config: AxiosRequestConfig = {}) {
	const { baseURL } = baseConfig
	return axios.create({ baseURL, ...config })
}
