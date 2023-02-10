import type { Pagination } from './PaginationModel';
import type { CategoryRecord } from './CategoriesModel';
import type { CurrencyRecord } from './CurrenciesModel';
export type Wallets = WalletsRecords & Pagination;

export type WalletExpand = {
	currency: CurrencyRecord;
	categories: Array<CategoryRecord>;
};

export type WalletsRecords = {
	items: WalletRecord[];
};

export interface WalletsWithPagination extends WalletsRecords {
	pagination: Pagination;
}

export interface WalletRecord {
	categories: string[];
	collectionId: string;
	collectionName: 'wallets';
	created: Date | string;
	currency: string;
	id: string;
	name: string;
	updated: Date;
	user: string;
	expand: WalletExpand;
}
