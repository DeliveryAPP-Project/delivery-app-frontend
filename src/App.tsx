import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import { GlobalStyle } from './styles/global';
import { PublicRoutes } from './routes';
import { Modal } from './components/Modal';
import { ModalProvider } from './context/ModalContext';
function App() {
	return (
		<ThemeProvider>
			<ModalProvider>
				<BrowserRouter>
					<PublicRoutes />
					{/* <RouterProvider router={publicRoutes} /> */}
					<Modal />
					<GlobalStyle />
				</BrowserRouter>
			</ModalProvider>
		</ThemeProvider>
	);
}

export default App;
