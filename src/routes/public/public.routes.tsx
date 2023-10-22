import { Route, Routes as RoutesProvider } from 'react-router-dom';

import Home from '../../components/Home';
import CartPage from '../../pages/CartPage';
import { TRoutes } from '../types';

const routes: TRoutes[] = [
  { path: '/', element: <Home /> },
  { path: '/cart', element: <CartPage /> },
];

export default function PublicRoutes() {
  return (
    <RoutesProvider>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </RoutesProvider>
  );
}
