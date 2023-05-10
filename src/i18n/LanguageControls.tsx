import React, { useCallback, useContext, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Button } from 'antd';
import { Language, LanguageContext } from '@/i18n/LanguageWrapper';

const LanguageControls: React.FC = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const { formatMessage: f } = useIntl();

    const handleCheckLanguage = useCallback(
        function (lang: Language) {
            setLanguage(lang);
        },
        [setLanguage]
    );

    const buttonsData = useMemo(
        () => [
            {
                language: 'ru',
                label: 'RU',
            },
            {
                language: 'en',
                label: 'EN',
            },
        ],
        []
    );

    return (
        <div className="language-controls">
            <div className="label">{f({ id: 'App.Language.ChooseLanguage' })}</div>
            <div className="controls">
                {buttonsData.map(button => {
                    const isSelected = language === button.language;

                    return (
                        <Button
                            id={button.language}
                            key={button.language}
                            type={isSelected ? 'primary' : 'default'}
                            onClick={handleCheckLanguage.bind(this, button.language)}
                        >
                            {button.label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default LanguageControls;
