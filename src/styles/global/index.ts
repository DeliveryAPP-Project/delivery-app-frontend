import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;

    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.body};
  }
`;
