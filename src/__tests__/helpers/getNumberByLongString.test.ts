import { describe, expect, it } from '@jest/globals';
import { getNumberByLongString } from '@/helpers/getNumberByLongString';

describe('testing: getNumberByLongString', function () {
    it('Simple object', function () {
        const testString = 'test/string/10';
        const result = getNumberByLongString(testString);
        expect(result).toEqual('10');
    });

    it('Empty values', function () {
        const testString = '';
        const result = getNumberByLongString(testString);
        expect(result).toEqual('');
    });

    it('Null value', function () {
        const testString: string = null;
        const result = getNumberByLongString(testString);
        expect(result).toEqual('');
    });

    it('Type of return value', function () {
        const testString = 'test/string/10';
        const result = getNumberByLongString(testString);
        expect(typeof result === 'string').toBeTruthy();
    });
});
