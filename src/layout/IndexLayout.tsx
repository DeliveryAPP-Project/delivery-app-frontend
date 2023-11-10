import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

export function IndexLayout(){
  return (
    <>
      <Header />

      <Outlet />
    </>
  );

}
