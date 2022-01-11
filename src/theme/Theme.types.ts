export interface ThemeType {
    name: string;
    color: string;
    background: string;
    colorTwo: string;
    backgroundTwo: string;
    colorButton:string;
    backgroundButton: string;
}

export interface ThemeContextType {
    theme: ThemeType;
    dispatchTheme: (theme: string) => void;
}