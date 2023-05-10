import { Types as CommonTypes } from '@/models/common';
import { getRecordByKey } from '@/helpers';

/**
 * Общий коллбэк начала запроса (ожидание промиса)
 */
export const pendingCallback = (state: CommonTypes.CommonStateType) => {
    state.isLoad = false;
    state.error = null;
};

/**
 * Общий коллбэк для неудачного ответа сервера (с ошибкой)
 */
export const rejectCallback = (state: CommonTypes.CommonStateType, action: CommonTypes.ReduxActionType) => {
    state.isLoad = true;
    state.error = action.error;

    if (action.error.code === 'ERR_BAD_REQUEST' && action.error.message.indexOf('403') !== -1) {
        location.href = '/';
    }
};

/**
 * Простая запись в таблицу отредактированной ячейки
 */
export function setRecord<
    StateType extends CommonTypes.StateType<RecordType>,
    RecordType extends Record<string, string>
>(state: StateType, action: CommonTypes.SetRecordActionType): void {
    const rowKey = action.payload.rowKey ? action.payload.rowKey : 'id';
    const valueKey = action.payload.valueKey ? action.payload.valueKey : action.payload.id;
    const dataKey: string = action.payload.dataKey ? action.payload.dataKey : 'data';

    const data = (state[dataKey] as unknown as RecordType[]).slice(0);
    let record;

    if (valueKey) {
        record = getRecordByKey<RecordType>(data, valueKey, rowKey);
    }

    if (record) {
        if (action.payload.additionalData) {
            const addData = action.payload.additionalData;
            for (const key in addData) {
                if (Object.prototype.hasOwnProperty.call(addData, key)) {
                    (record as Record<string, string>)[key] = addData[key];
                }
            }
        }

        if (action.payload.dataIndex) {
            (record as Record<string, string>)[action.payload.dataIndex] = action.payload.value;
        }

        (state[dataKey] as RecordType[]) = data;
    }
}

/**
 * Изменения параметров пагинации в хранилище
 */
export function setPagination<StateType extends CommonTypes.StateType<RecordType>, RecordType>(
    state: StateType,
    action: CommonTypes.SetPaginationActionType
): void {
    state.pagination = action.payload;
}

/**
 * Сохранение фильтров в глобальном хранилище
 */
export function setFilters<StateType extends CommonTypes.StateType<RecordType>, RecordType>(
    state: StateType,
    action: CommonTypes.SetRecordActionType
): void {
    state.filters = action.payload;
}

/**
 * Сохранение строки поиска в глобальном хранилище
 */
export function setSearch<StateType extends CommonTypes.StateType<RecordType>, RecordType>(
    state: StateType,
    action: CommonTypes.SetRecordActionType
): void {
    state.search = action.payload.value;
}
