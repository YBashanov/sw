import React, { createContext, useState } from 'react';
import { getIntlLocale, getIntlMessages } from '@/i18n';
import { IntlProvider } from 'react-intl';

export type Language = 'ru' | 'en';

export const defaultLanguage: Language = 'ru';

type LanguageContextType = {
    language?: Language;
    setLanguage?: (language: Language) => void;
};

type LanguageWrapperType = {
    children: React.ReactNode;
};

export const LanguageContext = createContext<LanguageContextType>({
    language: defaultLanguage,
});

export const defaultSaveLang = localStorage.getItem('language') as Language;

const LanguageWrapper: React.FC<LanguageWrapperType> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(defaultSaveLang || defaultLanguage);

    const handleSetLanguage = (lang: Language) => {
        localStorage.setItem('language', lang);

        // установка для React-компонентов
        setLanguage(lang);

        // установка для статики (схемы Yup, модели Redux)
        // устанавливается в i18n/index

        // требуется перезагрузка для сохранения в localStorage и взятия оттуда
        location.href = '/';
    };

    // тестирование смены языка. (в идеале это должно быть по кнопке)
    React.useEffect(() => {
        // const wantLang = 'ru';
        // if (defaultSaveLang !== wantLang) handleSetLanguage(wantLang);
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
            <IntlProvider locale={getIntlLocale(language)} messages={getIntlMessages(language)}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};

export default LanguageWrapper;
