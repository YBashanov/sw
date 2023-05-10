/**
 * Преобразовать объект в строку для отправки через url (GET-запрос)
 */
export const convertObjectToUrl = (obj: Record<string, number | string>): string => {
    let newString = '';
    if (obj) {
        for (const key in obj) {
            // в строке запроса даже пустые значения не нужны (не говоря уже о null, undefined)
            if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && obj[key] !== '') {
                newString += `${key}=${obj[key]}&`;
            }
        }
        if (newString) {
            newString = newString.substring(0, newString.length - 1);
        }
    }
    return newString;
};
