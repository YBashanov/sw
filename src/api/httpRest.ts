import createHttpRest, { cancelTokenSource } from './restApi/createHttpAxios';
import { API_PATH } from '@/constants';

const baseUrl = window.apiPath ? window.apiPath : API_PATH;

const defaultHeaders = {
    'Content-Type': 'application/json;charset=utf-8',
};
/**
 * создание экземпляра httpRest (Rest api)
 */
const httpRest = createHttpRest({
    baseUrl,
    defaultHeaders,
    cancelToken: cancelTokenSource.token,
});
export default httpRest;
