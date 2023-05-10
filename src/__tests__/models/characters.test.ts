import store from '@/models/RootStore';
import { describe, expect, it } from '@jest/globals';
import { Actions, ActionsSync } from '@/models/characters';
import { AnyAction } from '@reduxjs/toolkit';

describe('testing: Characters store', function () {
    it('Empty object', function () {
        const state = store.getState().characters;
        expect(state.tableData).toEqual([]);
    });

    it('First request to the server', async function () {
        const result = await store.dispatch(Actions.getTableData({ page: '1' }) as unknown as AnyAction);
        const newData = result.payload.data.results;
        expect(result.type).toBe('getTableData/fulfilled');

        const state = store.getState().characters;
        expect(state.tableData).toEqual(newData);
    }, 10000);

    it('Set record (local)', function () {
        const state1 = store.getState().characters;
        expect(state1.tableData[0].name).toEqual('Luke Skywalker');

        const newValue = 'SkywalkerTest';
        store.dispatch(
            ActionsSync.setRecord({
                rowKey: 'url',
                valueKey: state1.tableData[0].url,
                dataKey: 'tableData',
                dataIndex: 'name',
                value: newValue,
            })
        );
        store.dispatch(
            ActionsSync.updateMemory({
                url: state1.tableData[0].url,
                dataIndex: 'name',
                value: newValue,
            })
        );

        const state2 = store.getState().characters;
        expect(state2.tableData[0].name).toEqual('SkywalkerTest');
    });

    it('Get local table data', function () {
        const result = store.dispatch(
            ActionsSync.getTableData({
                page: '1',
                hasLocal: '',
            })
        );
        expect(result.payload.hasLocal).toEqual('1');

        const state = store.getState().characters;
        expect(state.tableData[0].name).toEqual('SkywalkerTest');
    });

    it('Set search', function () {
        store.dispatch(ActionsSync.setSearch({ value: 'sky' }));

        const state = store.getState().characters;
        expect(state.search).toEqual('sky');
    });

    it('Set pagination', function () {
        const state1 = store.getState().characters;
        store.dispatch(
            ActionsSync.setPagination({
                ...state1.pagination,
                current: 2,
            })
        );

        const state2 = store.getState().characters;
        expect(state2.pagination.current).toEqual(2);
    });

    it('Set filters', function () {
        const state1 = store.getState().characters;
        store.dispatch(
            ActionsSync.setFilters({
                ...state1.filters,
                eye_color: 'yellow',
            })
        );

        const state2 = store.getState().characters;
        expect(state2.filters.eye_color).toEqual('yellow');
    });
});
