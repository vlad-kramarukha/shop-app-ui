import useRestService from './rest-service'
import { LogRequestParams, RegRequestParams } from './types/auth-service-types'

export enum AuthServiceApi {
	AUTH = '/auth/authenticate',
	REG = '/auth/register'
}
export default function useAuthService() {
	const instance = useRestService()

	async function auth(params: LogRequestParams) {
		try {
			const { data } = await instance.post(AuthServiceApi.AUTH, params)
			console.log('LOG: ', data)
		} catch (e) {
			console.error(e)
		}
	}

	async function reg(params: RegRequestParams) {
		try {
			const { data } = await instance.post(AuthServiceApi.REG, params)
			console.log('REG: ', data)
		} catch (e) {
			console.error(e)
		}
	}

	return { reg, auth }
}
