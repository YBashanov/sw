import { createSlice } from '@reduxjs/toolkit';
import { Actions, Convertors, Types } from './';
import { initialState } from './initials';
import { pendingCallback, rejectCallback, setRecord, setPagination, setFilters, setSearch } from '@/models/common';
import { getMainData, getRecordByKey } from '@/helpers';
import { enableMapSet } from 'immer';

enableMapSet();

const learningReducer = createSlice({
    name: 'learningReducer',
    initialState: initialState,
    reducers: {
        setRecord,
        setPagination,
        setFilters,
        setSearch,

        /**
         * Получить страницу из памяти
         */
        getTableData: (state: Types.StateType, action): void => {
            const hasFilters = !!(
                state.filters.eye_color ||
                state.filters.hair_color ||
                state.filters.skin_color ||
                state.filters.gender ||
                state.filters.heightStart ||
                state.filters.heightEnd
            );
            const hasSearch = !!action.payload.search;

            if (hasSearch) {
                action.payload.hasLocal = '0';
            } else {
                if (hasFilters) {
                    action.payload.hasLocal = '1';
                    let mainData: Types.RecordType[] = getMainData<Types.RecordType>(state.mainData);
                    for (const key in state.filters) {
                        if (Object.prototype.hasOwnProperty.call(state.filters, key)) {
                            const valueFilter = state.filters[key as Types.KeyofFiltersType];

                            if (valueFilter) {
                                mainData = mainData.filter((itemData: Types.RecordType) => {
                                    let valueData;
                                    if (key === 'heightStart' || key === 'heightEnd') {
                                        valueData = itemData.height;
                                    } else {
                                        valueData = itemData[key as Types.KeyofRecordType];
                                    }

                                    if (valueData) {
                                        if (key === 'heightStart') {
                                            return valueFilter <= valueData;
                                        } else if (key === 'heightEnd') {
                                            return valueFilter >= valueData;
                                        } else {
                                            return valueFilter === valueData;
                                        }
                                    }
                                });
                            }
                        }
                    }

                    state.tableData = mainData;
                    state.pagination.total = mainData.length;
                } else {
                    if (state.mainData.has(action.payload.page)) {
                        action.payload.hasLocal = '1';
                        state.tableData = state.mainData.get(action.payload.page);
                        state.pagination.total = state.mainTotalData;
                    } else {
                        action.payload.hasLocal = '0';
                    }
                }
            }
        },

        /**
         * Обновить данные персонажа в памяти
         */
        updateMemory: (state: Types.StateType, action) => {
            const url = action.payload.url;
            const key: string = action.payload.dataIndex;
            const value: string = action.payload.value;

            const mainData = getMainData<Types.RecordType>(state.mainData);
            const findItem: Types.RecordType = mainData.find(item => item.url === url);

            if (findItem) {
                (findItem as Record<string, string>)[key] = value;
            } else {
                // ищем в других хранилищах
                if (state.secondaryData.has(url)) {
                    const findItem = state.secondaryData.get(url);
                    (findItem as Record<string, string>)[key] = value;
                }
            }
        },

        getCharacter: (state: Types.StateType, action) => {
            state.character = getRecordByKey<Types.RecordType>(state.tableData, action.payload.url, 'url');
            if (!state.character) {
                throw new Error();
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(Actions.getTableData.pending, pendingCallback)
            .addCase(Actions.getTableData.rejected, rejectCallback)
            .addCase(Actions.getTableData.fulfilled, (state, action) => {
                Convertors.responseGetTable(state, action.payload);
            });
    },
});

export const { actions, reducer } = learningReducer;
export default reducer;
