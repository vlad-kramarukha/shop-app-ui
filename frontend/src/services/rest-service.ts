import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import HttpStatusCodes from './types/http-status-codes'
import Cookies from 'js-cookie'

const baseConfig: AxiosRequestConfig = {
	baseURL: 'http://localhost:8080',
	withCredentials: true
}

function log(error: AxiosError) {
	console.group('ERROR')
	console.log('TIME: ', dayjs().format('HH:mm:ss DD.MM.YYYY'))
	console.log('CODE: ', error.code)
	console.log('INFO: ', error.response)
	console.log('RAW: ', error.toJSON())
	console.groupEnd()
}

export default function useRestService(config: AxiosRequestConfig = {}) {
	const { baseURL, withCredentials } = baseConfig
	const instance = axios.create({ baseURL, withCredentials, ...config })
	const router = useRouter()

	instance.interceptors.response.use(
		(response) => {
			return response
		},
		async (error: AxiosError) => {
			const { response } = error

			log(error)

			if (response?.status === HttpStatusCodes.Forbidden) {
				Cookies.remove('user')
				await router.push({ name: 'log' })
			}

			return error
		}
	)

	return instance
}
