import { WalletsApi } from '$api/WalletsApi';
import type { PageServerLoad } from './$types';

export const load = (async ({ url, setHeaders, cookies }) => {
	const api = new WalletsApi();
	const accessToken = cookies.get('accessToken') || '';

	setHeaders({
		Authorization: accessToken
	});

	const { items, pagination } = await api.getWallets(url.searchParams);

	return {
		wallets: items,
		pagination
	};
}) satisfies PageServerLoad;
