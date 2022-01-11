import { useContext, useState } from 'react';
import { ThemeContext } from './Theme';

export const useTheme = () => {
    const context = useContext(ThemeContext);
    const [theme, setTheme] = useState(context.theme.name);

    const setMode = (mode: string) => {
        context.dispatchTheme(mode);
        setTheme(mode);
    };

    const themeToggler = () => (theme === 'dark' ? setMode('light') : setMode('dark'));

    return { theme, themeToggler };
};

export default useTheme;