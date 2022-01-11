import { createGlobalStyle, ThemeProps, withTheme } from 'styled-components';
import { ThemeType } from './theme/Theme.types';

  
const GlobalStyle = createGlobalStyle<ThemeProps<ThemeType>>(({theme}) => `

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
  
    body  {
      -webkit-font-smoothing: antialiased;
      height: 100vh;
      margin: 0 auto;
      background-color: ${ theme.background};
      color: ${ theme.color};
      font-family: 'Bebas Neue', cursive;
    }

    button { 
      margin: 1rem;
      padding: 1rem;
      background-color: ${ theme.backgroundButton};
      color: ${ theme.colorButton};
      cursor: pointer;
    }

    button:hover { 
      background-color: ${ theme.backgroundTwo};
      color: ${ theme.colorTwo};
    }
`);
  
export default withTheme(GlobalStyle);