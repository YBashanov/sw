import { convertObjectToUrl } from '@/helpers/convertObjectToUrl';
import { describe, expect, it } from '@jest/globals';

describe('testing: convertObjectToUrl', function () {
    it('Simple object', function () {
        const testObj = {
            type: 'character',
            name: 'Luke',
            age: 20,
        };
        const result = convertObjectToUrl(testObj);
        expect(result).toEqual('type=character&name=Luke&age=20');
    });

    it('Empty values', function () {
        const testObj: Record<string, number | string> = {
            num: 5,
            und: undefined,
            nul: null,
            str: '',
        };
        const result = convertObjectToUrl(testObj);
        expect(result).toEqual('num=5&nul=null');
    });

    it('Null value', function () {
        const testObj: Record<string, number | string> = null;
        const result = convertObjectToUrl(testObj);
        expect(result).toEqual('');
    });

    it('Type of return value', function () {
        const testObj = { text: 'test' };
        const result = convertObjectToUrl(testObj);
        expect(typeof result === 'string').toBeTruthy();
    });
});
