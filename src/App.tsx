import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from './components/ThemeProvider';
import { queryClient, QueryClientProvider } from './libs/query';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

import { PrivateRoutes, PublicRoutes } from './routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <PrivateRoutes />
          <PublicRoutes />
        </ThemeProvider>
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
