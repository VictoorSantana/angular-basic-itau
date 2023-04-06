export interface PagedList<T> {    
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    pageTotal: number;


    
    data:  Array<T>;
}

