import styled from 'styled-components';
import colors from '../../styles/colors';

export const SearchInputWrapper = styled.section`
  align-items: center;
  background: ${colors.grey2};
  display: flex;
  height: 73px;
  justify-content: center;
  position: absolute;
  width: 100vw;
`;

export const SearchInputSection = styled.section`
  align-items: center;
  background: ${colors.white2};
  border-radius: 5px;
  display: flex;
  height: 44px;
  justify-content: center;
  padding: 15px 15px 15px 20px;
  width: 90%;

  @media only screen and (min-width: 1000px) {
    width: 80%;
  }
`;

export const SearchInputLabel = styled.label`
  align-items: center;
  color: ${colors.grey};
  display: flex;
  font-family: Lato,Arial,sans-serif
  font-size: 14px;
  font-weight: 400;
  height: 44px;
  padding: 13px 0;
  width: 100%;
`;

export const SearchInput = styled.input`
  background: ${colors.white2};
  border: none;
  border-radius: 4px;
  font-size: 20px;
  outline: 0;
  width: 100%;
`;

export const SearchInputHelper = styled.span`
  display: none;

  @media only screen and (min-width: 1000px) {
    color: ${colors.grey};
    display: inherit;
    font-size: 11px;
    font-weight: 300;
    justify-self: flex-end;
  }
`;
