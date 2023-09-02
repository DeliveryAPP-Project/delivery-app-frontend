import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateProvider(props: PrivateRouteProps) {
  const { children } = props;
  const loading = false;
  const isAuthenticated = false;

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
