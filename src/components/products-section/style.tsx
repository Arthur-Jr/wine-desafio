import styled from 'styled-components';
import colors from '../../styles/colors';


export const ProductsSectionStyled = styled.main`
  height: 100%;
  width: 100%;
  padding: 20px;

  @media only screen and (min-width: 1000px) {
    height: 100%;
    width: 78%;
    padding: 0;
  }
`;

export const CountText = styled.span`
  color: ${colors.black2};
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  line-height: 22px;
`;

export const ProductCount = styled.span`
  color: ${colors.black2};
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

export const ProductsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 32px 0 0;
`;
