import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Faq from '../pages/Faq';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';
import Layout from '../components/Layout';
import Restaurants from '../pages/Restaurants';
import Restaurant from '../pages/Restaurant';

export const publicRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/restaurantes', element: <Restaurants /> },
			{ path: '/restaurantes/:id', element: <Restaurant /> },
			{ path: '/faq', element: <Faq /> },
			{ path: '/confirme-sua-compra', element: <PurchaseConfirmation /> },
		],
	},
]);
