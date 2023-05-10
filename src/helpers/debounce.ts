export type DebounceFunction = (...args: unknown[]) => unknown;

/**
 * Пропускаем слишком частые вызовы
 */
function debounce<FunctionType>(func: FunctionType, delay = 100) {
    let timeout: ReturnType<typeof setTimeout> = null;

    return function debounceWrapper(...args: unknown[]): Promise<unknown> {
        timeout && clearTimeout(timeout);

        return new Promise(resolve => {
            timeout = setTimeout(() => {
                timeout = null;
                resolve((func as DebounceFunction).apply(this, args));
            }, delay);
        });
    };
}

export default debounce;
