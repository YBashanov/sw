import { reducer as charactersReducer, Types as CharactersTypes } from '@/models/characters';

export type RootStateType = {
    characters: CharactersTypes.StateType;
};

export const reducers = {
    characters: charactersReducer,
};
