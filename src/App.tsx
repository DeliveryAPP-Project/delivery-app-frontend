import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import { GlobalStyle } from './styles/global';
import { PublicRoutes } from './routes';
import { Modal } from './components/Modal';
import { ModalProvider } from './context/ModalContext';
import { CartProvider } from './context/cartContext';
function App() {
	return (
		<ThemeProvider>
			<ModalProvider>
				<CartProvider>
					<BrowserRouter>
						<PublicRoutes />
						{/* <RouterProvider router={publicRoutes} /> */}
						<Modal />
						<GlobalStyle />
					</BrowserRouter>
				</CartProvider>
			</ModalProvider>
		</ThemeProvider>
	);
}

export default App;
