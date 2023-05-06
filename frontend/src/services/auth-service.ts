import useRestService from './rest-service'
import useToken from './token-service'
import { LogRequestParams, LogResponseParams, RegRequestParams } from './types/auth-service-types'

export enum AuthServiceApi {
	AUTH = '/auth/authenticate',
	REG = '/auth/register'
}
export default function useAuthService() {
	const token = useToken()
	const instance = useRestService()

	async function auth(params: LogRequestParams) {
		try {
			const { data }: { data: LogResponseParams } = await instance.post(AuthServiceApi.AUTH, params)
			token.value = data.accessToken
		} catch (e) {
			console.error(e)
		}
	}

	async function reg(params: RegRequestParams) {
		try {
			const { data } = await instance.post(AuthServiceApi.REG, params)
		} catch (e) {
			console.error(e)
		}
	}

	return { reg, auth }
}
