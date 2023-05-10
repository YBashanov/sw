import { PaginationProps } from 'antd/lib/pagination';

export type SetPaginationActionType = {
    type: string;
    payload: PaginationProps;
};
