import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <container>
      <header>
        <nav></nav>
      </header>
      <container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </container>
      <footer>
        <p>
          Create by
          <a href="http://https://github.com/ArtemKolesnyk">
            & copy; Artem Kolesnyk
          </a>
          as homework for GoIT Academy
        </p>
      </footer>
    </container>
  );
};
export default Layout;
