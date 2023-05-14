import useRestService from './rest-service'
import { AuthServiceApi, LogRequestParams, RegRequestParams } from './types/auth-service-types'
import HttpStatusCodes from './types/http-status-codes'
import { useRouter } from 'vue-router'
import { Routes } from '../router'

export default function useAuthService() {
	const instance = useRestService()
	const router = useRouter()

	async function auth(params: LogRequestParams) {
		const data = await instance.post(AuthServiceApi.AUTH, params, { withCredentials: true })
	}

	async function reg(params: RegRequestParams) {
		const data = await instance.post(AuthServiceApi.REG, params)

		if (data.status === HttpStatusCodes.Created) {
			await router.push(Routes.LogPage)
		}
	}

	return { reg, auth }
}
