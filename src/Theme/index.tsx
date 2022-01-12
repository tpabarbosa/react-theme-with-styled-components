import { useContext, useState } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import localStorage from '../localStorage';
import { ThemeMode } from './Theme.types';
import { light, dark } from './themes';

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

    const themeToggler = () => (
        ctx.theme.name === 'dark' ? ctx.dispatchTheme('light') : ctx.dispatchTheme('dark')
    );

    return [ctx.theme.name, themeToggler];
};

export default useTheme;