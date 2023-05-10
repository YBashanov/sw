import { RootStateType } from '@/models/reducers';

export const getState = (state: RootStateType) => state.characters;

export const isFiltersEmpty = (state: RootStateType) => {
    const filters = state.characters.filters;
    return !(
        filters.eye_color ||
        filters.hair_color ||
        filters.skin_color ||
        filters.gender ||
        filters.heightStart ||
        filters.heightEnd
    );
};
