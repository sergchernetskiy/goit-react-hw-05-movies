import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Input = styled.input`
  margin-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  width: 300px;
  height: 40px;
  background-color: #cfbdc0;
  /* border-radius: ${p => p.theme.radii.normal}; */
  border-radius: ${p => p.theme.radii.big};
  border: none;
  outline: none;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.grey};
    background-color: ${p => p.theme.colors.light};
  }
`;

export const BtnSearch = styled.button`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  height: 40px;
  color: ${p => p.theme.colors.grey};
  background-color: #cfbdc0;

  border-radius: ${p => p.theme.radii.big};
  border: none;
  outline: none;
  cursor: pointer;

  transition: color 250ms, background-color 250ms;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.brown};
  }
`;
