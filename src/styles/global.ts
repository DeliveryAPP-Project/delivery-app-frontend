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
    color: ${props => props.theme.colors.blackFont};
    font-family: ${props => props.theme.fonts.body};
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.blackFont};
  }
`;
