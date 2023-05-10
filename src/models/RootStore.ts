import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

/**
 * Главное хранилище приложения
 */
const RootStore = configureStore({
    reducer: reducers,
    middleware: [thunk] as const,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof RootStore.getState>;

export type AppDispatch = typeof RootStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default RootStore;
