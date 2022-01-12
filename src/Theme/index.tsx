import { createContext, useEffect } from 'react';
import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import localStorage from '../localStorage';
import { ThemeContextType, ThemeMode } from './Theme.types';
import { light, dark } from './themes';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemedApp: React.FC = ({children}) => {
    const mode = localStorage.get('theme')?.mode as ThemeMode;
    const [theme, setTheme] = useState(mode === 'dark' ? dark : light);

    const dispatchTheme = (mode: ThemeMode) => {
        localStorage.set('theme', {mode: mode});
        setTheme(mode === 'dark' ? dark : light);
    }

    return (
        <ThemeContext.Provider value={{theme, dispatchTheme}} >
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
        );
};

export const useTheme = (): [ThemeMode, () => void] => {
    const ctx = useContext(ThemeContext);
    const [theme, setTheme] = useState(ctx.theme.name);

    const setMode = (mode: ThemeMode) => {
        ctx.dispatchTheme(mode);
        setTheme(mode);
    };

    const themeToggler = () => (
        theme === 'dark' ? setMode('light') : setMode('dark')
    );

    useEffect(() => {
        setTheme(ctx.theme.name);
    }, [ctx.theme])

    return [theme, themeToggler];
};

export default useTheme;