export interface LogRequestParams {
	email: string
	password: string
}

export interface RegRequestParams extends LogRequestParams {
	nickname: string
}
