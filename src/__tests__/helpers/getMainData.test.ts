import { getMainData } from '@/helpers/getMainData';
import { describe, expect, it } from '@jest/globals';

describe('testing: getNumberByLongString', function () {
    const testObj: Map<number, number[]> = new Map([
        [1, [1, 2, 3, 4, 5]],
        [2, [6, 7, 8, 9, 0]],
    ]);

    it('Simple object', function () {
        const result = getMainData(testObj);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    });

    it('Type of return value', function () {
        const result = getMainData(testObj);
        expect(Array.isArray(result)).toBeTruthy();
    });

    it('Empty values', function () {
        const testObj = new Map();
        const result = getMainData(testObj);
        expect(result).toEqual([]);
    });

    it('Null value', function () {
        const testObj: Map<number, number[]> = null;
        const result = getMainData(testObj);
        expect(result).toEqual([]);
    });
});
