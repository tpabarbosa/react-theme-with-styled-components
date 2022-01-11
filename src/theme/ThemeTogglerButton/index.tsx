import useTheme from '../useTheme';
import * as C from './styles';

export const ThemeTogglerButton = () => {
    const {theme, themeToggler} = useTheme();

    return (
        <C.Container>
          <label htmlFor="checkbox" className="switch">
            <input
              id="checkbox"
              type="checkbox"
              onClick={themeToggler}
              onChange={() => false}
              checked={theme === 'dark'}
            />
            <C.Icons className="slider round">
              {theme !== 'light' ? (
                <>
                  <C.Icon >☀</C.Icon>
                </>
              ) : (
                <>
                  <C.Icon >🌘</C.Icon>
                </>
              )}
            </C.Icons>
          </label>
        </C.Container>
      );
}
