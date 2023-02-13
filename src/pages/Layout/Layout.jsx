import Navigation from 'components/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>
      <Footer>
        <p>
          Created by
          <a href="https://github.com/ArtemKolesnyk"> Artem Kolesnyk </a>
          as homework for GoIT Academy 2023
        </p>
      </Footer>
    </Container>
  );
};
export default Layout;
