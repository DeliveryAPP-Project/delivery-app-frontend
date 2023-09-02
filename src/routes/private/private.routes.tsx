import { Route, Routes as RoutesProvider } from 'react-router-dom';

import Home from '../../components/Home';
import { TRoutes } from '../types';

import PrivateProvider from './private.provider';

const routes: TRoutes[] = [{ path: '/', element: <Home /> }];

export default function PrivateRoutes() {
  return (
    <RoutesProvider>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PrivateProvider>{route.element}</PrivateProvider>}
        />
      ))}
    </RoutesProvider>
  );
}
