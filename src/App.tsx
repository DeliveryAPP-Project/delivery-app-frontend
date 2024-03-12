import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import { GlobalStyle } from './styles/global';
import { publicRoutes } from './routes';
function App() {
	return (
		<ThemeProvider>
			<RouterProvider router={publicRoutes} />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
