import { pb } from '$pocketbaseConfig';
import type { Credentials, UserModel } from '$models/UserModel';

export class UserApi {
	async authByLogin(credentials: Credentials) {
		const authData: UserModel = await pb
			.collection('users')
			.authWithPassword(credentials.login, credentials.password);

		return authData;
	}
}
