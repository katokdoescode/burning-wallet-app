import { WalletsApi } from '$api/WalletsApi';
import type { PageServerLoad } from './$types';

export const load = (async ({ url, setHeaders, cookies }) => {
	// TODO: check for auth
	const api = new WalletsApi();

	setHeaders({
		Authorization: cookies.get('accessToken') || ''
	});

	const { items, pagination } = await api.getWallets(url.searchParams);

	return {
		wallets: items,
		pagination
	};
}) satisfies PageServerLoad;
