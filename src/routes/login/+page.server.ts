import type { Credentials } from '$models/UserModel';
import { UserApi } from '$api/UserApi';
import type { Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request }) => {
		const api = new UserApi();
		const data = await request.formData();
		const credentials: Credentials = {
			login: data.get('username')?.toString() || '',
			password: data.get('password')?.toString() || ''
		};

		try {
			const { token } = await api.authByLogin(credentials);
			cookies.set('accessToken', token, { path: '/', httpOnly: true });
		} catch (err) {
			const { status } = err as { status: number };
			const cause = err as Error;
			if (cause) throw error(status, cause.message);
		}

		throw redirect(301, '/my-wallets');
	}
} satisfies Actions;
