import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      blackFont: string;
    },
    fonts: {
      body: string;
      brand: string;
    }
  }
}

