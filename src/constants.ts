export const PREFIX_CLS = 'sw';

export const CHARACTERS_REDIRECT = '/characters';
export const CHARACTER_REDIRECT = '/character/';
export const CHARACTER_URL = 'https://swapi.dev/api/people/';
export const API_PATH = 'https://swapi.dev/api/';

declare global {
    interface Window {
        apiPath: string;
    }
}
window.apiPath = window.apiPath || '';
