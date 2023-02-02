export interface Credentials {
	login: string;
	password: string;
}

export type UserRecord = {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	username: string;
	verified: boolean;
	emailVisibility: boolean;
	email: string;
	name: string;
	avatar: string;
};

export type UserModel = {
	token: string;
	record: UserRecord;
};
