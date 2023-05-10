import { Types } from '../';
import { Types as CommonTypes } from '@/models/common';
import { PaginationProps } from 'antd/lib/pagination';

/**
 * Внутреннее хранилище.
 * Может отличаться от структуры, которая приходит из базки
 */
export type StateType = CommonTypes.CommonStateType & {
    // данные для таблицы
    tableData?: Types.RecordType[];

    // хранение основных данных (кэширование), полученных через пагинацию
    mainData?: Map<string, Types.RecordType[]>;
    mainTotalData?: number;

    // данные, которых нет в главном хранилище, но мы их уже взяли (например, через поиск)
    // и они пока не сопоставлены с главным хранилищем
    // Если есть совпадения - они удаляются отсюда, и ссылка будет вести на главное хранилище
    // Это сделано для того, чтобы сохранять отредактированные в поиске данные,
    //  даже если мы пока не перешли по ним через основные запросы (через пагинацию)
    secondaryData?: Map<string, Types.RecordType>;

    // данные, которые собраны запросом поиска по имени
    searchData?: Map<string, Types.RecordType>;

    // пагинация для таблицы
    pagination?: PaginationProps;

    // отдельно выбранный персонаж
    character?: Types.RecordType;

    // фильтры (например, строка поиска по имени)
    filters?: Types.FiltersType;
    search?: string;
};
