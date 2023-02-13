import { pb } from '$pocketbaseConfig';
import type { Credentials, UserModel, UserRegistrationData, UserRecord } from '$models/UserModel';

export class UserApi {
	private endpoint = 'users';

	async authByLogin(credentials: Credentials) {
		const authData: UserModel = await pb
			.collection(this.endpoint)
			.authWithPassword(credentials.login, credentials.password);

		return structuredClone(authData);
	}

	async registerUser(userData: UserRegistrationData) {
		const response: UserRecord = await pb.collection(this.endpoint).create(userData);

		return structuredClone(response);
	}
}
