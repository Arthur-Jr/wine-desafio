import styled from 'styled-components';
import colors from './colors';

export const MainSection = styled.main`
  width: 100%;

  @media only screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    padding: 40px 160px 0;
  }
`;

export const CartMessage = styled.span`
  background: ${colors.pink};
  color: ${colors.white};
  font-family: Lato;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  left: 0;
  padding: 5px 25px;
  position: fixed;
  right: 80;
  top: 640px;
`;
