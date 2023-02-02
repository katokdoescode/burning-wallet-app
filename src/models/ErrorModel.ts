export interface PocketBaseErrorData {
	code: number;
	message: string;
	data: object;
}

export interface PocketBaseError {
	url: string;
	status: number;
	data: PocketBaseErrorData;
	isAbort: boolean;
	originalError: boolean;
	name: string;
}
