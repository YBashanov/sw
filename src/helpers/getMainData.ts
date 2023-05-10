export function getMainData<RecordType>(mainData: Map<string | number, RecordType[]>): RecordType[] {
    const newData: RecordType[] = [];
    const copyData: Map<string | number, RecordType[]> = new Map(mainData);

    const iterator = copyData.values();

    let value;
    while ((value = iterator.next().value)) {
        newData.push(...value);
    }

    return newData;
}
