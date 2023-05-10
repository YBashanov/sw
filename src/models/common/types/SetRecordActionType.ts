import { Types } from '../';

/**
 * Дополнительные параметры запроса для редактирования ячеек
 */
export type PayloadCellRecordAdditionalType = Record<string, Types.RecordValue>;

/**
 * Формат для редактирования большинства ячеек через 1 параметр -> [dataIndex]: value
 */
export type PayloadCellRecordType = {
    // имя поля (ключ), по которому ищется record. Если отсутствует, то ищется по id
    rowKey?: string;
    // значение поля, которое сравнивается с другими значениями для поиска record.
    // По умолчанию значение берется из action.payload.id
    valueKey?: string;
    // для получения поля из хранилища (default='data')
    dataKey?: string;

    // для определения record по id (в простом массиве данных). То же, что и valueKey
    id?: string;
    // для определения record по массиву ключей (во вложенном массиве данных)
    arrayKeys?: string[];
    // ключ, значение которого мы будем заменять
    dataIndex?: string;
    // значение для записи (на замену)
    value?: Types.RecordValue;
    // дополнительные данные, которые могут расширять контракт
    additionalData?: PayloadCellRecordAdditionalType;
    //
    urlSuffix?: string;
};

export type SetRecordActionType = {
    type: string;
    payload: PayloadCellRecordType;
};
