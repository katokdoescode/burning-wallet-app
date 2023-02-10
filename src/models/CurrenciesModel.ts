import type { Pagination } from './PaginationModel';
export type Currencies = CurrenciesRecords & Pagination;

export type CurrenciesRecords = {
	items: CurrencyRecord[];
};

export interface CurrenciesWithPagination extends CurrenciesRecords {
	pagination: Pagination;
}

export interface CurrencyRecord {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	name: string;
}
