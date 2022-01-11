import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import { useLocalStorage } from '../localStorage/useLocalStorage';
import { ThemeContextType } from './Theme.types';
import { light, dark } from './themes';

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type ThemeProps = {
    children: React.ReactNode,
}

const getTheme = (localStorage: any) => {
    const mode = localStorage.get('theme')?.mode as string;
    return mode === 'dark' ? dark : light;
}

export const Theme = ({ children }: ThemeProps) => {
    const ls = useLocalStorage();
    const [theme, setTheme] = useState(getTheme(ls));

    const dispatchTheme = (mode: string) => {
        ls.set('theme', {mode: mode});
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