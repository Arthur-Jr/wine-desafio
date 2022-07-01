import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding: 7px;

  @media only screen and (min-width: 1000px) {
    align-items: center;
    display: flex;
    font-size: 15px;
    line-height: 17px;
    padding: 10px 10px 15px 0;
  }
`;

export const FilterInput = styled.input`
  margin-right: 10px;
  transform: scale(1.4);
  outline: none;
`;