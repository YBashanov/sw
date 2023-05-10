import { describe, expect, it } from '@jest/globals';
import { getRecordByKey } from '@/helpers/getRecordByKey';

describe('testing: getRecordByKey', function () {
    it('Simple object', function () {
        const testObj = [
            {
                id: '1',
                value: 'test1',
            },
            {
                id: '2',
                value: 'test2',
            },
        ];
        const result = getRecordByKey(testObj, '2', 'id');
        expect(result).toEqual({ id: '2', value: 'test2' });
    });

    it('Null value', function () {
        const testObj: Record<string, string | string[]>[] = null;
        const result = getRecordByKey(testObj, '2', 'id');
        expect(result).toEqual(null);
    });

    it('Type of return value', function () {
        const testObj = [
            {
                id: '1',
                value: 'test1',
            },
            {
                id: '2',
                value: 'test2',
            },
        ];
        const result = getRecordByKey(testObj, '2', 'id');
        expect(typeof result === 'object').toBeTruthy();
    });
});
