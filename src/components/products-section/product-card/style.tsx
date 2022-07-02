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
  margin-bottom: 24px;
  width: 156px;

  @media only screen and (min-width: 1000px) {
    height: 400px;
    margin-bottom: 30px;
    width: 250px;
  }
`;

export const Card = styled.div`
  align-items: center;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  height: 86%;
  width: 100%;

  &:hover {
    zoom: 1.02;
    cursor: pointer;
  }

  @media only screen and (min-width: 1000px) {
    height: 85%;
  }
`;

export const CardImage = styled.img`
  height: 185px;
`;

export const CardTitle = styled.h5`
  color: ${colors.black}
  font-family: Lato;
  font-size: 14px;
  font-weight: 500;
  height: 27px;
  line-height: 17px;
  padding: 0 10px;
  text-align: center;
  margin: 10px 0 27px;

  @media only screen and (min-width: 1000px) {
    font-size: 16px;
    height: 22px;
    line-height: 19px;
    letter-spacing: -0.222488px;
    margin: 10px 0 20px;
  }
`;

export const FullPriceWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media only screen and (min-width: 1000px) {
    width: 130px;
  }
`;

export const FullPrice = styled(CardBaseSpan)`
  color: ${colors.grey};
  font-size: 12.5px;
  font-weight: 400;
  line-height: 12px;
  padding: 5px 0;
  text-decoration: line-through;

  @media only screen and (min-width: 1000px) {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
`;

export const CardDiscount = styled(CardBaseSpan)`
  background: ${colors.orange};
  border-radius: 2px;
  color: ${colors.white};
  font-size: 13px;
  font-weight: 400;
  line-height: 10px;
  padding: 4px 5px;

  @media only screen and (min-width: 1000px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    padding: 2px 3px;
  }
`;

export const PartnerPriceWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0 7px;
  width: 80%;

  @media only screen and (min-width: 1000px) {
    padding: 12px 0 5px;
    width: 65%;
  }
`;

export const PartnerText = styled(CardBaseSpan)`
  color: ${colors.black};
  font-size: 10px;
  font-weight: 300;
  line-height: 10px;
  text-align: center;

  &:nth-child(2) {
    color: ${colors.pink};
    font-size: 12px;
    font-weight: 700;
    width: 60%;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 12px;
    font-weight: 700;
    text-align: center;

    &:nth-child(2) {
      color: ${colors.pink};
      font-size: 12px;
      line-height: 10px;
      width: 50%;
    }
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
  font-weight: 400;
  line-height: 16px;
  padding: 5px 0 0;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (min-width: 1000px) {
    color: ${colors.grey};
    font-weight: 600;
    line-height: 14px;
    padding: 5px 0 0;
  }
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
  margin-top: 9px;
  padding: 12px 25px;
  width: 100%;

  &:hover {
    zoom: 1.03;
    cursor: pointer;
  }

  @media only screen and (min-width: 1000px) {
    margin-top: 16px;
  }
`;
