import React, { useCallback, useContext } from 'react';
import { useIntl } from 'react-intl';
import { Button } from 'antd';
import { ThemeContext, Themes } from './ThemeWrapper';

const ThemeControls: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { formatMessage: f } = useIntl();

    const handleCheckTheme = useCallback(
        function (theme: Themes) {
            setTheme(theme);
        },
        [setTheme]
    );

    const buttonsData = [
        {
            theme: Themes.Default,
            label: f({ id: 'App.Theme.Default' }),
        },
        {
            theme: Themes.Pink,
            label: f({ id: 'App.Theme.Pink' }),
        },
        {
            theme: Themes.Green,
            label: f({ id: 'App.Theme.Green' }),
        },
    ];

    return (
        <div className="theme-controls">
            <div className="label">{f({ id: 'App.Theme.ChooseTheme' })}</div>
            <div className="controls">
                {buttonsData.map(button => {
                    const isSelected = theme === button.theme;

                    return (
                        <Button
                            key={button.theme}
                            type={isSelected ? 'primary' : 'default'}
                            onClick={handleCheckTheme.bind(this, button.theme)}
                        >
                            {button.label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default ThemeControls;
