import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { Types } from './';
import { convertObjectToUrl } from '@/helpers';
import { Types as CommonTypes } from '@/models/common';
import httpRest from '@/api/httpRest';

/**
 * Получить данные для таблицы
 */
export const getTableData: AsyncThunk<Types.ResponseMixType, Types.RequestTableType, CommonTypes.ThunkApiConfigType> =
    createAsyncThunk('getTableData', async (reqParams: Types.RequestTableType) => {
        const response = await httpRest({
            method: 'GET',
            url: 'people?' + convertObjectToUrl(reqParams),
        });
        return {
            data: response.data,
            params: reqParams,
        };
    });
