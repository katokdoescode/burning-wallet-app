import { UserApi } from '$api/UserApi';
import type { Actions } from './$types';
import type { UserRegistrationData } from '$models/UserModel';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ request }) => {
		const api = new UserApi();

		const data = Object.fromEntries(await request.formData());

		const registerData: UserRegistrationData = {
			username: data.username.toString(),
			email: data.email.toString(),
			name: data.name.toString(),
			password: data.password.toString(),
			passwordConfirm: data.password.toString()
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
