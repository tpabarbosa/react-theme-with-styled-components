
import useTheme from '..';
import * as S from './styles';

export const ThemeTogglerButton = () => {
    const [theme, themeToggler] = useTheme();

    return (
        <S.Container>
          <p>Click Icon to toggle theme</p>
          <p><S.Icon > 👇 </S.Icon></p>
          <S.Button onClick={themeToggler}>
            {theme === 'light' ? <S.Icon >☀</S.Icon> : <S.Icon >🌙</S.Icon>}
          </S.Button>
        </S.Container>
      );
}


