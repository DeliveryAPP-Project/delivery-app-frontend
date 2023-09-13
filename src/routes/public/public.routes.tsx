import { Route, Routes as RoutesProvider } from 'react-router-dom';

import Home from '../../components/Home';
import { TRoutes } from '../types';

const routes: TRoutes[] = [{ path: '/', element: <Home /> }];

export default function PublicRoutes() {
  return (
    <RoutesProvider>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </RoutesProvider>
  );
}
