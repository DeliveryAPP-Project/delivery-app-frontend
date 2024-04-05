import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Faq from '../pages/Faq';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';
import Layout from '../components/Layout';
import Restaurants from '../pages/Restaurants';
import Restaurant from '../pages/Restaurant';
import NotFound404 from '../pages/NotFound404';

export function PublicRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>

				<Route index element={<Home />} />
				<Route path='restaurantes' element={<Restaurants />} />
				<Route path='restaurantes/:id' element={<Restaurant />} />
				<Route path='faq' element={<Faq />} />
				<Route path='conclua-sua-compra' element={<PurchaseConfirmation />} />
				<Route path='*' element={<NotFound404 />} errorElement={<NotFound404 />}
				/>
			</Route>
		</Routes>
	);
}
