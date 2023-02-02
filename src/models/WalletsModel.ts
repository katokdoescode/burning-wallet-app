import type { Pagination } from "./PaginationModel";
export type Wallets = WalletsRecords & Pagination;

export type WalletsRecords = {
	items: WalletRecord[];
};

export interface WalletsWithPagination extends WalletsRecords {
	pagination:  Pagination;
};

export interface WalletRecord {
	categories: string[];
	collectionId: string;
	collectionName: 'wallets';
	created: string; // TODO: replace to Date like 2023-01-23 19:52:25.573Z
	currency: string;
	id: string;
	name: string; // TODO: expected currency name, so create new type
	updated: string;
	user: string;
	expand: object;
};
