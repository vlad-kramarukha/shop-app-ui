import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

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

export default function useRestService(namespace?: string) {
	const { baseURL, withCredentials } = baseConfig
	const url = namespace ? `${baseURL}/${namespace}` : baseURL
	const instance = axios.create({ baseURL: url, withCredentials })
	const router = useRouter()

	instance.interceptors.response.use(
		(response) => {
			return response
		},
		async (error: AxiosError) => {
			log(error)
			return error
		}
	)

	return instance
}
