
export interface Page {
    content: Array<Beverages>;
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
};

export interface Beverages{
    name: String;
    price: number;
    bottleSize: number;
    stockAmount: number;
    description?: String;
}
 
export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
};

export interface Sort {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
};

export interface Sort {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
};

