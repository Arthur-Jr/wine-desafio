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
    width: 70%;
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

export const ImageButtonWrapper = styled.a`
  display: inherit;
  width: 65px;
  height: 60px;

  &:nth-child(1) {
    width: 40px;
    height: 40px;
  }

  &:nth-child(2) {
    display: none;
  }

  @media only screen and (min-width: 1000px) {
    width: 56px;
    height: 56px;

    &:hover {
      zoom: 1.1;
    }

    &:nth-child(1) {
      width: 56px;
      height: 56px;
    }

    &:nth-child(2) {
      display: inherit;
    }
  }
`;

export const HeaderLink = styled.a`
  color: ${colors.darkGrey};
  font-family: 'Neo Sans Std';
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

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