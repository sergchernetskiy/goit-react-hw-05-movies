import styled from 'styled-components';

export const Poster = styled.div`
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MovieName = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.brown};
  padding-left: ${p => p.theme.space[3]}px;
`;
