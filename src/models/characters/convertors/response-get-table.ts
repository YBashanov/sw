import { Types } from '../';
import { getMainData } from '@/helpers';
import { cloneDeep } from 'lodash';

/**
 * Конвертор, который преобразует данные, пришедшие с бэкенда
 * в данные, понятные хранилищу
 */
export const responseGetTable = (state: Types.StateType, response: Types.ResponseMixType): void => {
    const responseData: Types.RecordType[] = response.data.results;

    if (!response.params.search) {
        const forMainData: Types.RecordType[] = [];

        // проверяем, получали ли мы ранее строки через поиск или иным способом
        responseData.forEach(respItem => {
            if (state.secondaryData.has(respItem.url)) {
                const findItem = state.secondaryData.get(respItem.url);
                forMainData.push(cloneDeep(findItem));
                state.secondaryData.delete(respItem.url);
            } else {
                forMainData.push(respItem);
            }
        });
        state.mainData.set(response.params.page, forMainData);
        state.mainTotalData = response.data.count;
        state.tableData = forMainData;
    } else {
        // сравниваем с данными из mainData.
        // Если там есть - берем по ссылке оттуда
        // Если нету - сохраняем в secondData
        // Пересечения - сохраняем в searchData
        const forSearchData: Types.RecordType[] = [];
        const forSecondaryData: Types.RecordType[] = [];

        const mainData = getMainData(state.mainData);
        responseData.forEach(respItem => {
            const findItem = mainData.find(item => item.url === respItem.url);
            if (findItem) {
                forSearchData.push(findItem);
            } else {
                if (state.secondaryData.has(respItem.url)) {
                    const findItem = state.secondaryData.get(respItem.url);
                    forSearchData.push(findItem);
                } else {
                    forSearchData.push(respItem);
                    forSecondaryData.push(respItem);
                }
            }
        });

        state.tableData = forSearchData;

        forSecondaryData.forEach(item => {
            state.secondaryData.set(item.url, item);
        });
    }

    state.isLoad = true;

    // данные имеют постоянную длину
    state.pagination.total = response.data.count;
};
