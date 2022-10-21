declare module namespace {

    export interface Content {
        name: string;
        province: string;
        classType: string;
        level: number;
        coins: number;
        drinksInventory: any[];
        foodInventory: any[];
    }

    export interface Sort {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }

    export interface Pageable {
        sort: Sort;
        offset: number;
        pageSize: number;
        pageNumber: number;
        unpaged: boolean;
        paged: boolean;
    }

    export interface Sort2 {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }

    export interface RootObject {
        content: Content[];
        pageable: Pageable;
        last: boolean;
        totalPages: number;
        totalElements: number;
        size: number;
        number: number;
        sort: Sort2;
        first: boolean;
        numberOfElements: number;
        empty: boolean;
    }

}

