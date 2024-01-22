import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.regular};

  list-style: none;
`;

export const Author = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Content = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.brown};

  text-indent: ${p => p.theme.space[5]}px;
  text-align: justify;
`;
