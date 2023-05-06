export interface LogRequestParams {
	email: string
	password: string
}

export interface RegRequestParams extends LogRequestParams {
	name: string
}

export interface LogResponseParams {
	accessToken: string
}