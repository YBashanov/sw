import axios from 'axios';
import {
    CancelTokenSource,
    CreateHttpConfig,
    HttpRestType,
    RequestHttpConfig,
    ResponseHttpConfig,
} from '@/api/restApi/interfaces';
import { intl } from '@/i18n';

/**
 * Реализация токена отмены запросов через axios
 */
export let cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
export const cancelPendingRequests = (message?: string): void => {
    cancelTokenSource.cancel(message);
    cancelTokenSource = axios.CancelToken.source();
};

/**
 * Реализация класса createHttp (Rest api) на основе axios
 */
const createHttpAxios = (createConfig: CreateHttpConfig): HttpRestType => {
    const { baseUrl = '', defaultHeaders = {}, cancelToken, withCredentials = false } = createConfig;
    const baseUrlError = intl.source.formatMessage({ id: 'App.RestApi.BaseUrlError' });

    if (!baseUrl) {
        throw new Error(baseUrlError);
    }
    for (const key in defaultHeaders) {
        axios.defaults.headers.post[key] = defaultHeaders[key];
    }

    return async function httpRest<T>(config: RequestHttpConfig): Promise<ResponseHttpConfig<T>> {
        const { url: configUrl = '', method } = config;
        const options = {
            ...config,
            url: encodeURI(`${baseUrl}${configUrl}`),
            method: method || 'GET',
            headers: config.headers || {},
            cancelToken: config.cancelToken || cancelToken,
            withCredentials: config.withCredentials || withCredentials,
        };

        try {
            const response = await axios.request<T>(options);
            return {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                request: response.request,
            };
        } catch (e) {
            return Promise.reject(e);
        }
    };
};

export default createHttpAxios;
