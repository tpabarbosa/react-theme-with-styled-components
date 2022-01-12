# React Theme with Styled-components and Typescript

This project is an example of a theme implementation. It´s very simple, just a proof of concept.

### How it works
Styled-components has theming support by exporting a *ThemeProvider* wrapper. This wrapper provides a theme prop to all styled components.

    export const MyCustomStyledComponent = styled.div`
        ...
        background-color: ${props => props.theme.background};
        color:  ${props => props.theme.text};
        ...
    `

To use it with typescript we create a declaration file and extend styled-components *DefaultTheme* (that is an empty object by default) with an interface of our own theme.

    interface MyTheme {
        ...
        background: string;
        text: string;
        ...
    }

That should be enough to start themming an application. Styled-components also provides some ways to get theme without styled-components, [check documentation](https://styled-components.com/docs/advanced#getting-the-theme-without-styled-components). In this repo I made use of *ThemeContext* from styled-components, but implemented my own *useTheme*.

In this project I also made use of another styled-components feature, the helper method *createGlobalStyle*. It creates a special styled-component that can reset CSS styles or apply base stylesheets with theme, for example. 

In *'.src/Theme/index.tsx'* there are two exports: 
* **ThemedApp**: it's a wrapper that provides theme to the whole app via ThemeContext, ThemeProvider and GlobalStyle, and also gets and sets theme's name in localStorage;
* **useTheme**: it's a custom hook that reads theme from ThemeContext and returns a tuple with theme name and a toggler method so other components can interact with theme.

To be able to change theme I had implemented a very simple *ThemeTogglerButton* that imports useTheme and just calls it's toggler method when a button is clicked.

### Try it:

1. Clone repository
```
$ git clone https://github.com/tpabarbosa/react-theme-with-styled-components
```

2. Install dependencies
```
$ npm install 
```

3. Run
```
$ npm run start 
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Typescript, check out the [Typescript documentation](https://www.typescriptlang.org/).

To learn Styled-components, check out the [Styled-components documentation](https://styled-components.com/)