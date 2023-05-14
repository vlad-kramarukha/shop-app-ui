export enum AuthServiceApi {
	AUTH = '/auth/authenticate',
	REG = '/auth/register'
}

export interface LogRequestParams {
	email: string
	password: string
}

export interface RegRequestParams extends LogRequestParams {
	nickname: string
}
