import styled from 'styled-components';
import colors from '../../../styles/colors';

const CardBaseSpan = styled.span`
  font-family: Lato;
  font-weight: 500;
  text-align: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-bottom: 30px;
  width: 250px;
`;

export const Card = styled.div`
  align-items: center;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  height: 85%;
  width: 100%;

  &:hover {
    zoom: 1.02;
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  height: 185px;
`;

export const CardTitle = styled.h5`
  color: ${colors.black}
  font-family: Lato;
  font-size: 16px;
  font-weight: 500;
  height: 22px;
  line-height: 19px;
  letter-spacing: -0.222488px;
  text-align: center;
`;

export const FullPriceWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 105px;
`;

export const FullPrice = styled(CardBaseSpan)`
  color: ${colors.grey};
  line-height: 16px;
  font-size: 12px;
  padding: 5px 0;
  text-decoration: line-through;
`;

export const CardDiscount = styled(CardBaseSpan)`
  background: ${colors.orange};
  border-radius: 2px;
  color: ${colors.white};
  font-size: 11px;
  line-height: 12px;
  padding: 2px 3px;
`;

export const PartnerPriceWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 0 0;
  width: 135px;
`;

export const PartnerText = styled(CardBaseSpan)`
  color: ${colors.black};
  font-size: 11px;
  font-weight: 700;
  line-height: 10px;
  text-align: right;

  &:nth-child(2) {
    color: ${colors.pink};
    font-size: 12px;
  }
`;

export const PartnerPrice = styled(CardBaseSpan)`
  font-size: 20px;
  font-weight: 700;
  line-height: 10px;
`;

export const NoPartnerPrice = styled(CardBaseSpan)`
  color: ${colors.grey};
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  padding: 5px 0 0;
  text-transform: uppercase;
`;

export const CardButton = styled.button`
  background: ${colors.green};
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  color: ${colors.white};
  font-family: Lato;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  height: 40px;
  margin-top: 16px;
  padding: 12px 25px;
  width: 100%;

  &:hover {
    zoom: 1.03;
    cursor: pointer;
  }
`;
