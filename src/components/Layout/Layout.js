import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutStyles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div className={LayoutStyles.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
