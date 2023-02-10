import type { Pagination } from './PaginationModel';
import type { CategoryRecord } from './CategoriesModel';
import type { WalletRecord } from './WalletsModel';
export type Transactions = TransactionsRecords & Pagination;

export type TransactionExpand = {
	wallet: WalletRecord;
	category: CategoryRecord;
};

export type TransactionsRecords = {
	items: TransactionRecord[];
};

export interface TransactionsWithPagination extends TransactionsRecords {
	pagination: Pagination;
}

export interface TransactionRecord {
	id: string;
	collectionId: string;
	collectionName: string;
	created: Date;
	updated: Date;
	category: string;
	amount: string;
	description: string;
	wallet: string;
	expand: TransactionExpand;
}
