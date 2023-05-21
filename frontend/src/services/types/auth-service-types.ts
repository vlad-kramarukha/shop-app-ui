export enum AuthServiceApi {
	AUTHENTICATION = '/authenticate',
	REGISTRATION = '/register',
	LOGOUT = '/logout'
}

export interface LogRequestParams {
	email: string
	password: string
}

export interface RegRequestParams extends LogRequestParams {
	nickname: string
}
