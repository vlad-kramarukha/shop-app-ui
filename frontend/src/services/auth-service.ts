import useRestService from './rest-service'
import { LogRequestParams, RegRequestParams } from './types/auth-service-types'

export enum AuthServiceApi {
	AUTH = '/auth/authenticate',
	REG = '/auth/register'
}
export default function useAuthService() {
	const instance = useRestService()

	async function auth(params: LogRequestParams) {
		const data = await instance.post(AuthServiceApi.AUTH, params)
		console.log('LOG: ', data)
	}

	async function reg(params: RegRequestParams) {
		const data = await instance.post(AuthServiceApi.REG, params)
		console.log('REG: ', data)
	}

	return { reg, auth }
}
