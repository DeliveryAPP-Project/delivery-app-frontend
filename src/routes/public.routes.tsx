import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Faq from '../pages/Faq';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';
import Layout from '../components/Layout';
// import Restaurants from '../pages/Restaurants';

export const publicRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/faq', element: <Faq /> },
			{ path: '/confirme-sua-compra', element: <PurchaseConfirmation /> },
		],
	},
]);
