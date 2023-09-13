import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
      'gray-800': string;
      'main-yellow': string;
      'eclipse-yellow': string;
      black: string;
      white: string;
      },
      fonts:{
        header: string;
      }
  }
}
