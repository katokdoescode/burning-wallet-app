import { WalletsApi } from '$api/WalletsApi';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params, setHeaders, cookies }) => {
	const api = new WalletsApi();
	const accessToken = cookies.get('accessToken') || '';

	setHeaders({
		Authorization: accessToken
	});

	try {
		const transaction = await api.getTransaction(params.id);
		return transaction;
	} catch (err) {
		if (err) throw error(500);
	}
}) satisfies PageServerLoad;
