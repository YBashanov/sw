/**
 * Тип (интерфейс) для токена отмены запроса
 */
type Cancel = {
    message: string | undefined;
};
type Canceler = (message?: string) => void;
type CancelToken = {
    promise: Promise<Cancel>;
    reason?: Cancel;
    throwIfRequested(): void;
};
export type CancelTokenSource = {
    token: CancelToken;
    cancel: Canceler;
};

/**
 * Тип для создания httpRest-объекта (! без указания способа реализации REST)
 */
export type CreateHttpConfig = {
    baseUrl: string;
    defaultHeaders?: Record<string, string>;
    cancelToken?: CancelToken;
    withCredentials?: boolean;
};

/**
 * Возможные методы для общения с сервером
 */
export type Method = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE';

/**
 * Интерфейс для формата запросов
 */
export type RequestHttpConfig<D = any> = {
    url?: string;
    method?: Method;
    data?: D;
    headers?: Record<string, string>;
    cancelToken?: CancelToken;
    withCredentials?: boolean;
};

/**
 * Интерфейс для ответа
 */
export type ResponseHttpConfig<D = any> = {
    data: D;
    status?: number;
    statusText?: string;
    headers?: Record<string, string>;
    request?: any;
};

/**
 * Тип возвращаемого httpRest
 */
export type HttpRestType = <T>(config: RequestHttpConfig) => Promise<ResponseHttpConfig<T>>;
