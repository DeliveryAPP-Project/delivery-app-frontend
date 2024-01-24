import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;

    font-size: 1.6rem;
  }

  body {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.blackFont};
    font-family: ${props => props.theme.fonts.body};
  }
`;
