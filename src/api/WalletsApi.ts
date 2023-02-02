import { pb } from '$pocketbaseConfig';
import { pickBy } from '$utils/pick';

import type { Pagination } from '$models/PaginationModel';
import type { WalletRecord, Wallets, WalletsWithPagination } from '$models/WalletsModel';
import type { PaginationRequest } from '$models/PaginationModel';

export class WalletsApi {
	private endpoint = 'wallets';

	private searchParamsToObject(params: URLSearchParams): PaginationRequest {
		return Object.fromEntries(params.entries());
	}

	async getWallets(searchParams: URLSearchParams) {
		const pagination = this.searchParamsToObject(searchParams);

		// TODO: Create expand interface
		const response: Wallets = await pb
			.collection(this.endpoint)
			.getList(pagination.page, pagination.perPage, {
				expand: 'currency'
			});
		const resPagination: Pagination = pickBy<Pagination>(response, [
			'page',
			'perPage',
			'totalItems',
			'totalPages'
		]);

		// TODO: Expand known values
		const items = response.items.map((item: WalletRecord) =>
			pickBy<WalletRecord>(item, ['name', 'currency'])
		);

		const res: WalletsWithPagination = {
			items,
			pagination: resPagination
		};

		return res;
	}
}
