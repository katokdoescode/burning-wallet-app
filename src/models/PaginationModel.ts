export type Pagination = {
	page:  number;
	perPage: number;
	totalItems: number;
	totalPages: number;
};

export class PaginationRequest {
	page? = 1;
	perPage? = 30;
}
