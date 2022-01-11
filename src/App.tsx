import { Theme } from "./theme/Theme";
import { ThemeTogglerButton } from "./theme/ThemeTogglerButton";
import { Container } from './App.styles';

export const App = () => {

  return (
    <Theme>
      <Container className="App">
        <ThemeTogglerButton  />
        <h1>Testing Text Theme</h1>
        <button>Testing Button Theme</button>
      </Container>
    </Theme>
  );
}
