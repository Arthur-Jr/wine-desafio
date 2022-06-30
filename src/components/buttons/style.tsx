import styled from 'styled-components';

export const SearchButtonStyled = styled.button`
  background: inherit;
  border: none;
  width: 53px;
  height: 53px;

  &:hover {
    cursor: pointer;
    zoom: 1.1;
  }

  @media only screen and (min-width: 1000px) {
    width: 68px;
    height: 68px;
  }
`;