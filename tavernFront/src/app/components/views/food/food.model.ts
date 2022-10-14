export interface FoodPage {
    content: Array<Food>;
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

export interface Food {
    name: string;
    price: number;
    mass: number;
    stockAmount: number;
    description: string;
};

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

