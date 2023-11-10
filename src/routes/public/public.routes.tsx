import { Route, Routes as RoutesProvider } from 'react-router-dom';

import Home from '../../components/Home';
import Card from '../../components/Restaurants-and-foods/Card';
import { IndexLayout } from '../../layout/IndexLayout';
import { TRoutes } from '../types';

const routes: TRoutes[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurants',
    element: <Card />
  }
];

export default function PublicRoutes() {
  return (
    <RoutesProvider>
      <Route path='/' element={<IndexLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </RoutesProvider>
  );
}
