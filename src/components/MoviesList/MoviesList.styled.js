import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * ${p => p.theme.space[5]}px);
  margin-left: calc(-1 * ${p => p.theme.space[5]}px);
`;

export const Item = styled.li`
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
  flex-basis: calc(100% / 5 - ${props => props.theme.space[5]}px);

  overflow: hidden;

  list-style: none;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.regular};

  transform: scale(1);
  transition: box-shadow 250ms, transform 250ms;

  :hover,
  :focus {
    transform: scale(1.03);
  }
`;

export const LinkItem = styled(Link)`
  display: block;
  height: 100%;

  text-decoration: none;
`;
