/**
 * Получить запись по ключу
 */
export function getRecordByKey<RecordType extends Record<string, string | string[]>>(
    data: RecordType[],
    keyValue: string,
    rowKey: string
): RecordType {
    if (data) {
        for (let i = 0; i < data.length; i++) {
            const record: RecordType = data[i];

            if (record[rowKey] === keyValue) {
                return record;
            }
        }
    }
    return null;
}
