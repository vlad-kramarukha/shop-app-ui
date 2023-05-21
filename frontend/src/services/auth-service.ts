import useRestService from './rest-service'
import { AuthServiceApi, LogRequestParams, RegRequestParams } from './types/auth-service-types'
import HttpStatusCodes from './types/http-status-codes'
import { useRouter } from 'vue-router'
import { Routes } from '../router'
import Cookies from 'js-cookie'

export default function useAuthService() {
	const instance = useRestService()
	const router = useRouter()

	async function auth(params: LogRequestParams) {
		const data = await instance.post(AuthServiceApi.AUTH, params)
		console.log('AUTH', data)
		if (data.status === HttpStatusCodes.OK) {
			console.log('USER LOGIN')
			Cookies.set('user', 'authorized')
			await router.push(Routes.Home)
		}
	}

	async function reg(params: RegRequestParams) {
		const data = await instance.post(AuthServiceApi.REG, params)

		if (data.status === HttpStatusCodes.OK) {
			await router.push(Routes.Log)
		}
	}

	return { reg, auth }
}
