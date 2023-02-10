import { pb } from '$pocketbaseConfig';
import { pickBy } from '$utils/pick';

import type { Pagination } from '$models/PaginationModel';
import type { WalletRecord, Wallets, WalletsWithPagination } from '$models/WalletsModel';
import type { PaginationRequest } from '$models/PaginationModel';
import type {
	TransactionRecord,
	Transactions,
	TransactionsWithPagination
} from '$models/TransactionsModel';

export class WalletsApi {
	private endpoint = 'wallets';

	private searchParamsToObject(params: URLSearchParams): PaginationRequest {
		return Object.fromEntries(params.entries());
	}

	async getWallets(searchParams: URLSearchParams) {
		const pagination = this.searchParamsToObject(searchParams);

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

		const wallets: WalletsWithPagination = {
			items: response.items,
			pagination: resPagination
		};

		return structuredClone(wallets);
	}

	async getWallet(id: string | null) {
		if (id !== null) {
			const wallet: WalletRecord = await pb.collection(this.endpoint).getOne(id, {
				expand: 'currency,categories'
			});

			return structuredClone(wallet);
		}
	}

	async getTransactions(searchParams: URLSearchParams, walletId: string) {
		const pagination = this.searchParamsToObject(searchParams);

		this.endpoint = 'transactions';

		const response: Transactions = await pb
			.collection(this.endpoint)
			.getList(pagination.page, pagination.perPage, {
				filter: `wallet="${walletId}"`,
				expand: 'category,wallet'
			});

		const resPagination: Pagination = pickBy<Pagination>(response, [
			'page',
			'perPage',
			'totalItems',
			'totalPages'
		]);

		const transactions: TransactionsWithPagination = {
			items: response.items,
			pagination: resPagination
		};

		return structuredClone(transactions);
	}

	async getTransaction(id: string | null) {
		if (id !== null) {
			this.endpoint = 'transactions';

			const transaction: TransactionRecord = await pb.collection(this.endpoint).getOne(id, {
				expand: 'wallet,category,wallet.currency,category.icon'
			});

			return structuredClone(transaction);
		}
	}
}
