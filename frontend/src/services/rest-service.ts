import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

const baseConfig: AxiosRequestConfig = {
	baseURL: 'http://localhost:8080',
	withCredentials: true
}
export default function useRestService(config: AxiosRequestConfig = {}) {
	const { baseURL, withCredentials } = baseConfig
	const instance = axios.create({ withCredentials, ...config })
	const router = useRouter()

	instance.interceptors.response.use(
		(response) => {
			return response.data
		},
		async (error: AxiosError) => {
			const { response, code } = error

			console.group('ERROR')
			console.log('TIME: ', dayjs().format('HH:mm:ss DD.MM.YYYY'))
			console.log('CODE: ', code)
			console.log('INFO: ', response)
			console.log('RAW: ', error.toJSON())
			console.groupEnd()

			if (response?.status === 403) {
				await router.push({ name: 'log' })
			}

			return error
		}
	)

	return instance
}
