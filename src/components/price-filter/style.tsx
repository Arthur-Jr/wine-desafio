import styled from 'styled-components';
import colors from '../../styles/colors';

export const FilterWrapper = styled.main`
  /* background: red; */
  display: flex:
  flex-direction: column;
  padding:20px;
  width: 30%;
`;

export const Title = styled.h4`
  display: none;

  @media only screen and (min-width: 1000px) {
    display: inherit;
    color: ${colors.black2}
    font-family: Neo Sans Std;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px
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
    margin: 0 0 10px;
  }
`;

export const FormSection = styled.section`
  align-items: space-around;
  /* padding: 20px; */
  justify-content: space-around;
  /* background: white; */
  display: flex;
  flex-direction: column;
`;

export const FilterForm = styled.form`
  @media only screen and (min-width: 1000px) {
    align-items: flex-start;
    /* background: white; */
    display: flex;
    flex-direction: column;
  }
`;