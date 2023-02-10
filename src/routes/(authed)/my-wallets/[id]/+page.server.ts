import { WalletsApi } from '$api/WalletsApi';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, url, setHeaders, cookies }) => {
	const api = new WalletsApi();
	const accessToken = cookies.get('accessToken') || '';

	setHeaders({
		Authorization: accessToken
	});

	const wallet = await api.getWallet(params.id);
	const transactions = await api.getTransactions(url.searchParams, params.id);

	return {
		wallet,
		transactions: transactions.items
	};
}) satisfies PageServerLoad;
