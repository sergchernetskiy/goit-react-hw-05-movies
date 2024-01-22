import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import {
  Navigation,
  NavLinkItem,
} from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Container>
          <Navigation>
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="movies">Movies</NavLinkItem>
          </Navigation>
        </Container>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
