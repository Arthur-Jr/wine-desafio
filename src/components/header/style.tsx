import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderStyle = styled.header`
  background: ${colors.white};
  box-shadow: 0 1px 5px grey;
  display: flex;
  justify-content: space-between;
  height: 88px;
  width: 100%;

  @media only screen and (min-width: 1000px) {
    justify-content: space-evenly;
  }
`;

export const HeaderMainSection = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 220px;

  @media only screen and (max-width: 400px) {
    width: 170px
  }

  &:nth-child(2) {
    justify-content: space-around;
    width: 140px;
  }

  @media only screen and (min-width: 1000px) {
    width: 50%;

    &:nth-child(2) {
      width: 20%;
    }
  }
`;

export const HeaderLinksSection = styled.section`
  display: none;

  @media only screen and (min-width: 1000px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 80%;
  }
`;

export const LogoWrapper = styled.a`
  @media only screen and (max-width: 400px) {
    width: 80px
  }
`;

export const HamburguerButtonWrapper = styled.div`

  @media only screen and (max-width: 400px) {
    width: 60px
  }

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export const HeaderLink = styled.a`
  color: ${colors.darkGrey};
  font-family: 'Neo Sans Std';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  padding: 28px 4px 34px;

  &:hover {
    color: ${colors.lightTannat};
    zoom: 1.2;
  }
`;

export const CartCount = styled.span`
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 2px grey;
  color: ${colors.lightChardonnay};
  font-family: 'Lato';
  font-weight: 700;
  height: 20px;
  padding: 3px;
  position: absolute;
  text-align: center;
  top: 48px;
  width: 20px;

  @media only screen and (min-width: 1000px) {
    right: 10.7%;
  }

  @media only screen and (min-width: 1400px) {
    right: 11.5%;
  }
`;