import { Types, Initials } from '../';

/**
 * Конвертор, который преобразует данные состояния приложения (пагинация, фильтры, сортировка)
 * в параметры запроса
 */
export const requestGetTable = (pageState: Types.StateType): Types.RequestTableType => {
    return {
        ...Initials.initialRequestParams,
        'page': pageState.pagination ? String(pageState.pagination.current) : '',
        'search': pageState.search,
    };
};
