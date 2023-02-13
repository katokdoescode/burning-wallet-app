import { UserApi } from '$api/UserApi';
import type { Actions } from './$types';
import type { UserRegistrationData } from '$models/UserModel';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ request }) => {
		const api = new UserApi();

		const data = await request.formData();

		const registerData: UserRegistrationData = {
			username: data.get('username')?.toString() || '',
			email: data.get('email')?.toString() || '',
			name: data.get('name')?.toString() || '',
			password: data.get('password')?.toString() || '',
			passwordConfirm: data.get('password')?.toString() || ''
		};

		const res = await api.registerUser(registerData).catch((err) => {
			// TODO: Create error handler for PB responses;
			const { status, data } = err as { status: number; data: object };
			console.log(data);
			const cause = err as Error;
			if (cause) throw error(status, cause.message ?? 'Unexpected error');
		});

		if (res) throw redirect(301, '/login');
	}
} satisfies Actions;
