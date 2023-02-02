/**
 * Cant do this on the server because of an error:
 * // TODO: ERROR Error: Data returned from `load` while rendering /my-wallets is not serializable: Cannot stringify arbitrary non-POJOs (data.wallets[0])
 */

import { WalletsApi } from '$api/WalletsApi';
import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const api = new WalletsApi();

	const { items, pagination } = await api.getWallets(url.searchParams);

	return {
		wallets: items,
		pagination
	};
}) satisfies PageLoad;
