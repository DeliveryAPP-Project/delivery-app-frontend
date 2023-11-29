import { Route, Routes as RoutesProvider } from 'react-router-dom';

import Home from '../../components/Home';
import Faq from '../../pages/Faq';
import PurchaseConfirmation from '../../pages/PurchaseConfirmation';
import { TRoutes } from '../types';

const routes: TRoutes[] = [
  { path: '/', element: <Home /> },
  { path: '/confirmacao', element: <PurchaseConfirmation /> },
  { path: '/faq', element: <Faq /> },
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
