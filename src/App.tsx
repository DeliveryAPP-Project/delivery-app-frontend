import { ThemeProvider } from 'styled-components';

import Home from './components/Home';
import { GlobalStyle } from './styles/global';
import  theme  from './styles/theme';


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <strong>Delivery App</strong>
        <Home />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
