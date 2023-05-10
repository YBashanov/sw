import { Language } from '@/i18n/LanguageWrapper';
import intlMessagesEn from './en';
import intlMessagesRu from './ru';
import { createIntl, createIntlCache } from 'react-intl';

type Locale<T> = {
    [key: string]: T;
};

const savedLang = localStorage.getItem('language') as Language;

// locale для текста вне компонентов React (схемы Yup, модели Redux)
const locale: Language = savedLang || 'ru';
const cache = createIntlCache();

export const getIntlLocale = (locale: Language): string => {
    return (
        {
            ru: 'ru-RU',
            en: 'en',
        } as Locale<string>
    )[locale];
};

export const getIntlMessages = (locale: Language): Locale<string> => {
    return (
        {
            ru: intlMessagesRu,
            en: intlMessagesEn,
        } as Locale<Locale<string>>
    )[locale];
};

/**
 * локализация вне компонентов React
 */
export const intl = {
    source: createIntl(
        {
            locale: getIntlLocale(locale),
            messages: getIntlMessages(locale),
        },
        cache
    ),
    // смена локали
    switchLocale: function (accountLocale: Language): void {
        if (locale === accountLocale) {
            return;
        }
        const intlCache = createIntlCache();

        this.source = createIntl(
            {
                locale: getIntlLocale(accountLocale),
                messages: getIntlMessages(accountLocale),
            },
            intlCache
        );
    },
};
