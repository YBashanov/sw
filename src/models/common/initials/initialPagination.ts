import { PaginationProps } from 'antd/lib/pagination';

// стартовая пагинация
export const initialPagination: PaginationProps = {
    current: 1,
    pageSize: 10,
    pageSizeOptions: [],
    total: 0,
    showSizeChanger: false,
};
