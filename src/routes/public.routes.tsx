import { Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import { Cart } from '../pages/Cart';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import NotFound404 from '../pages/NotFound404';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';
import Restaurant from '../pages/Restaurant';
import Restaurants from '../pages/Restaurants';
import { Welcome } from '../pages/welcome';

export function PublicRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='welcome' element={<Welcome />} />
				<Route path='restaurantes' element={<Restaurants />} />
				<Route path='restaurantes/:id' element={<Restaurant />} />
				<Route path='faq' element={<Faq />} />
				<Route path='conclua-sua-compra' element={<PurchaseConfirmation />} />
				<Route path='carrinho' element={<Cart />} />
				<Route
					path='*'
					element={<NotFound404 />}
					errorElement={<NotFound404 />}
				/>
			</Route>
		</Routes>
	);
}
