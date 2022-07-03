import styled from 'styled-components';
import colors from '../../styles/colors';

import {
  FullPrice, CardDiscount, NoPartnerPrice, CardButton,
} from '../products-section/product-card/style';

const BaseDiv = styled.div`
  display: flex;
  flex-diretcion: row;
`;

const BaseSpan = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
`;

export const ProductDetailStyled = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 16px 0;
`;

export const OriginWrapper = styled(BaseDiv)`
  justify-content: space-evenly;
  width: 180px;
`;

export const OriginSpan = styled(BaseSpan)`
  color: ${colors.pink};
  font-size: 13px;
  line-height: 16px;

  &:nth-child(2n) {
    color: ${colors.grey};
  }

  &:last-child {
    color: ${colors.grey};
  }
`;

export const ProductName = styled.h4`
  font-family: Neo Sans Std;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin: 17px 0 13px;
  text-align: center;
`;

export const TypeWrapper = styled(BaseDiv)`
  align-items: center;
  justify-content: space-evenly;
  width: 230px;
  padding: 0 0 15px;
`;

export const CountryFlag = styled.img`
  height: 16px;
  width: 16px;
`;

export const TypeSpan = styled(BaseSpan)`
  color: ${colors.grey};
  font-size: 15px;
  line-height: 24px;
`;

export const ProductImage = styled(CountryFlag)`
  height: 333px;
  width: 218px;
`;

export const DescriptionWrapper = styled(BaseDiv)`
  flex-direction: column;
  width: 100%;
`;

export const DescriptionTitle = styled(ProductName)`
  font-size: 23px;
  text-align: left;
  margin: 16 0 9px;
`;

export const DescriptionText = styled.p`
  color: ${colors.darkGrey};
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 32px;
`;

export const PriceWrapper = styled(BaseDiv)`
  background: ${colors.white};
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);
  height: 85px;
  justify-content:space-between;
  padding: 0 8px;
  width: 100%;
`;

export const PriceWrapperDetail = styled(BaseDiv)`
  flex-direction: column;
  padding: 0 8px;
  width: 200px;
`;

export const DiscountDetail = styled(CardDiscount)`
  width: 65px;
  position: relative;
  bottom: 9px;
`;

export const FullPriceDetail = styled(FullPrice)`
  align-self: flex-start;
  color: ${colors.darkGrey};
  font-size: 16px;
  font-weight: 700;
  line-height: 10px;
  padding: 0 0 3px 0;
  margin-top: 0;
`;

export const PartnerPriceDetail = styled(BaseSpan)`
  color: ${colors.pink};
  font-size: 25px;
  line-height: 28px;
  font-weight: 700;

  &:nth-child(1) {
    font-size: 16px;
  }
`;

export const NoPartnerPriceDetail = styled(NoPartnerPrice)`
  color: ${colors.darkGrey};
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  padding: 0 0 8px;
`;

export const DetailButton = styled(CardButton)`
  align-self: center;
  height: 52px;
  width: 180px;
`;