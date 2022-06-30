import styled from 'styled-components';

export const ImageLinkWrapper = styled.a`
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