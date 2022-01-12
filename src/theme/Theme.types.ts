export type ThemeMode = 'dark' | 'light';

export type ThemeType = {
    name: ThemeMode;
    color: string;
    background: string;
    colorTwo: string;
    backgroundTwo: string;
    colorButton:string;
    backgroundButton: string;
}

export type ThemeContextType = {
    theme: ThemeType;
    dispatchTheme: (mode: ThemeMode) => void;
}