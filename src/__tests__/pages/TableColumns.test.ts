import { describe, expect, it } from '@jest/globals';
import { tableColumns } from '@/app/pages/characters-page/tableColumns';

describe('testing: tableColumns', function () {
    it('Columns length', function () {
        expect(tableColumns.length).toBe(10);
    });

    it('Columns priority', function () {
        expect(tableColumns[0].key).toEqual('created');
        expect(tableColumns[1].key).toEqual('name');
        expect(tableColumns[2].key).toEqual('birth_year');
        expect(tableColumns[3].key).toEqual('eye_color');
        expect(tableColumns[4].key).toEqual('hair_color');
        expect(tableColumns[5].key).toEqual('skin_color');
        expect(tableColumns[6].key).toEqual('gender');
        expect(tableColumns[7].key).toEqual('height');
        expect(tableColumns[8].key).toEqual('mass');
        expect(tableColumns[9].key).toEqual('films');
    });
});
