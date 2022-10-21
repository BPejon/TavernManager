export interface Page {
    content: Array<Traveller>;
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

export interface Traveller {
    name: string;
    province: string;
    classType: string;
    level: number;
    coins: number;
    drinksInventory?: Array<any>;
    foodInventory?: Array<any>;
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
    sorted: boolean;
    unsorted: boolean;
};

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
};

