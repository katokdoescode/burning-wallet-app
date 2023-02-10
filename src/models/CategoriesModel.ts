import type { Pagination } from './PaginationModel';
import type { CategoryIconsModel } from './CategoryIconsModel';
export type Categories = CategoriesRecords & Pagination;

export type CategoryExpand = {
	icon: CategoryIconsModel;
};

export type CategoriesRecords = {
	items: CategoryRecord[];
};

export interface CategoriesWithPagination extends CategoriesRecords {
	pagination: Pagination;
}

export interface CategoryRecord {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	name: string;
	icon: string;
	expand: CategoryExpand;
}
