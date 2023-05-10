import { SerializedError } from '@reduxjs/toolkit';

export type CommonStateType = {
    // загружен ли контент данной модели, default = false
    isLoad?: boolean;
    // вывод ошибки
    error?: SerializedError;
};
