import styled from 'styled-components';
import colors from '../../../styles/colors';

export const PageQuantityWrapper = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 38px;
  padding: 0 0 20px;
  width: 350px;

  @media only screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const EllipsisSpan = styled.span`
  color: ${colors.pink};
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 9px;
`;

export const PageNumberButton = styled.button.attrs((props: { active: boolean }) => props)`
  background: ${(props) => props.active ? colors.pink : 'inherit'};
  border: solid 1px ${colors.pink};
  border-radius: 3px;
  color: ${(props) => props.active && colors.white};
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 38px;
  line-height: 19px;
  width: 38px;

  &:hover {
    cursor: pointer;
  }
`;

export const ChangePageButton = styled.button`
  background: inherit;
  border: none;
  color: ${colors.pink};
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export const NextPageMobile = styled.button`
  align-items: center;
  align-self: center;
  background: inherit;
  border: 2px solid ${colors.pink};
  border-radius: 5px;
  color: ${colors.pink};
  display: flex;
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  justify-content: center;
  height: 40px;
  padding: 12px 24px;
  width: 100%;
`;

export const MobilePageCount = styled(EllipsisSpan)`
  color: ${colors.black};
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 8px 0 25px;
`;