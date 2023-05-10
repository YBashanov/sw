import { Initials as CommonInitials } from '@/models/common';
import { Types } from '../';
import { initialFilters } from './initialFilters';

export const initialState: Types.StateType = {
    ...CommonInitials.commonInitialState,
    tableData: [],

    mainData: new Map(),
    mainTotalData: 0,
    secondaryData: new Map(),
    searchData: new Map(),

    pagination: CommonInitials.initialPagination,

    character: null,

    filters: initialFilters,
    search: '',
};
