import useRestService from './rest-service'
import { LogRequestParams, RegRequestParams } from './types/auth-service-types'
import HttpStatusCodes from './types/http-status-codes'
import { useRouter } from 'vue-router'

export enum AuthServiceApi {
	AUTH = '/auth/authenticate',
	REG = '/auth/register'
}

export default function useAuthService() {
	const instance = useRestService()
	const router = useRouter()

	async function auth(params: LogRequestParams) {
		const data = await instance.post(AuthServiceApi.AUTH, params)
	}

	async function reg(params: RegRequestParams) {
		const data = await instance.post(AuthServiceApi.REG, params)

		if (data.status === HttpStatusCodes.Created) {
			await router.push({ name: 'log' })
		}
	}

	return { reg, auth }
}
