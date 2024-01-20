import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.xl};

  color: ${p => p.theme.colors.accent};

  text-align: center;
`;
