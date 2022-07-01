import styled from 'styled-components';
import colors from '../../styles/colors';

export const FilterWrapper = styled.main`
  display: flex:
  flex-direction: column;
  width: 30%;
`;

export const Title = styled.h4`
  display: none;

  @media only screen and (min-width: 1000px) {
    display: inherit;
    color: ${colors.black2};
    font-family: Neo Sans Std;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 32px;
  }
`;

export const SubTitle = styled.h6`
  display: none;

  @media only screen and (min-width: 1000px) {
    display: inherit;
    color: ${colors.black2};
    font-family: Neo Sans Std;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    margin: 0 0 16px;
  }
`;

export const FormSection = styled.section`
  align-items: space-around;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FilterForm = styled.form`
  @media only screen and (min-width: 1000px) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }
`;