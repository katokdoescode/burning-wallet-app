import type { Credentials } from '$models/UserModel';
import { UserApi } from '$api/UserApi';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request }) => {
		const api = new UserApi();
		const data = await request.formData();
		const credentials: Credentials = {
			login: data.get('username')?.toString() || '',
			password: data.get('password')?.toString() || ''
		};

		const { token } = await api.authByLogin(credentials);
		cookies.set('accessToken', token, { path: '/', httpOnly: true });
		throw redirect(301, '/my-wallets');
	}
} satisfies Actions;
