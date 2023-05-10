import React, { createContext, useEffect, useState } from 'react';

export enum Themes {
    Default = 'theme-default',
    Pink = 'theme-pink',
    Blue = 'theme-blue',
    Green = 'theme-green',
}

type ThemeContextType = {
    theme?: Themes;
    setTheme?: (theme: Themes) => void;
};

type ThemeWrapperType = {
    children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Themes.Default,
});

const defaultTheme = localStorage.getItem('theme') as Themes;

const ThemeWrapper: React.FC<ThemeWrapperType> = ({ children }) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme ? defaultTheme : Themes.Default);

    const handleSetTheme = (theme: Themes) => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
    };

    useEffect(() => {
        document.body.setAttribute('class', `theme ${theme}`);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
            <div>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeWrapper;
