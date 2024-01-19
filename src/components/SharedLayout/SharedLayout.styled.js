import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: inline-flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const NavLinkItem = styled(NavLink)`
  position: relative;
  padding: ${p => p.theme.space[3]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  text-decoration: none;

  color: ${p => p.theme.colors.accent};
  transition: color 250ms;

  &.active {
    color: ${p => p.theme.colors.purple};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
  }
`;
