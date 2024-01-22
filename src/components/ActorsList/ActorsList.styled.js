import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * ${p => p.theme.space[4]}px);
  margin-left: calc(-1 * ${p => p.theme.space[4]}px);
  padding-top: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  flex-basis: calc(100% / 7 - ${p => p.theme.space[4]}px);

  list-style: none;

  border-top: 2px solid ${p => p.theme.colors.accent};
  border-bottom: 2px solid ${p => p.theme.colors.accent};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperImg = styled.div`
  width: 100%;
  height: 210px;

  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const ActorName = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Character = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.brown};
`;
