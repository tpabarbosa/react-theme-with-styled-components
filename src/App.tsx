import useTheme from "./Theme";
import { ThemeTogglerButton } from "./Theme/ThemeTogglerButton";
import * as S from './App.styles';

export const App = () => {
  const [theme] = useTheme();

  return (
      <S.Container className="App">
        <ThemeTogglerButton  />
        <h1>Now theme is {theme}</h1>
      </S.Container>
  );
}
