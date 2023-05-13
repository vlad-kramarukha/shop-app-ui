import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useRouter } from 'vue-router'

const baseConfig: AxiosRequestConfig = {
	baseURL: 'http://localhost:8080'
}
export default function useRestService(config: AxiosRequestConfig = {}) {
	const { baseURL } = baseConfig
	const instance = axios.create({ baseURL, ...config })
	const router = useRouter()

	instance.interceptors.response.use(
		(response) => {
			return response.data
		},
		async (error: AxiosError) => {
			const { response, code } = error

			console.group('ERROR')
			console.log(`CODE: ${code}`)
			console.log(`INFO: ${response}`)
			console.groupEnd()

			if (response?.status === 403) {
				await router.push({ name: 'log' })
			}

			return Promise.reject(error)
		}
	)

	return instance
}
