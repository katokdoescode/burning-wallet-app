import { pb } from "$pocketbaseConfig";
import { pickBy } from '$utils/pick';

import type { Pagination } from "../models/PaginationModel";
import type { Wallets, WalletsWithPagination } from "$models/WalletsModel";
import type { PaginationRequest } from "$models/PaginationModel";


export class WalletsApi {
	private endpoint = 'wallets';

	private searchParamsToObject(params: URLSearchParams): PaginationRequest {
		return Object.fromEntries(params.entries());
	};

	async getWallets(searchParams: URLSearchParams) {
		const pagination = this.searchParamsToObject(searchParams);
		const response: Wallets = await pb.collection(this.endpoint).getList(pagination.page, pagination.perPage);
		const resPagination: Pagination = pickBy<Pagination>(response, ['page', 'perPage', 'totalItems', 'totalPages']);

		const res: WalletsWithPagination = {
			items: response.items,
			pagination: resPagination,
		};

		return res;
	};
}
