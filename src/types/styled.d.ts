import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow1: string;
      yellow2: string;
      white: string;
      black: string;
    },
    fonts: {
      body: string;
      brand: string;
    }
  }
}

