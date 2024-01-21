import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const WrapperImage = styled.div`
  width: 250px;
  height: 350px;
`;

export const ImageMovie = styled.img`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  flex-basis: calc(100% - 266px);
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;
`;

export const MovieName = styled.h1`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.l};
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.brown};
`;

export const Overview = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.m};
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.brown};
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.light};
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;
`;

export const Genres = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.m};
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.brown};
`;

export const AdditionalInfo = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.m};
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;
  color: ${p => p.theme.colors.brown};
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  list-style: none;
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;
`;

export const NavLinkItem = styled(NavLink)`
  position: relative;
  padding: ${p => p.theme.space[3]}px;
  /* margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px; */
  margin: ${p => p.theme.space[0]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.m};
  text-decoration: none;

  color: ${p => p.theme.colors.purple};
  transition: color 250ms;

  &.active {
    color: ${p => p.theme.colors.red};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
  }
`;
