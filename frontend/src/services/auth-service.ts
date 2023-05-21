import useRestService from './rest-service'
import { AuthServiceApi, LogRequestParams, RegRequestParams } from './types/auth-service-types'
import HttpStatusCodes from './types/http-status-codes'
import { useRouter } from 'vue-router'
import { Routes } from '../router'

export default function useAuthService() {
	const instance = useRestService('auth')
	const router = useRouter()

	async function authentication(params: LogRequestParams) {
		const { status } = await instance.post(AuthServiceApi.AUTHENTICATION, params)

		if (status === HttpStatusCodes.OK) {
			await router.push(Routes.Home)
		}
	}

	async function registration(params: RegRequestParams) {
		const { status } = await instance.post(AuthServiceApi.REGISTRATION, params)

		if (status === HttpStatusCodes.OK) {
			await router.push(Routes.Log)
		}
	}

	async function logout() {
		const { status } = await instance.post(AuthServiceApi.LOGOUT)
	}

	return { registration, authentication }
}
