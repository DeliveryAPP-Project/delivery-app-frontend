import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Faq from '../pages/Faq';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';
import Layout from '../components/Layout';
import Restaurants from '../pages/Restaurants';
import NotFound404 from '../pages/NotFound404';

export const publicRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound404 />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/restaurantes', element: <Restaurants /> },
			{ path: '/faq', element: <Faq /> },
			{ path: '/confirme-sua-compra', element: <PurchaseConfirmation /> },
		],
	},
]);
