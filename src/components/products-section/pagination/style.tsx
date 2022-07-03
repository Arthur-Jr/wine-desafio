import styled from 'styled-components';
import colors from '../../../styles/colors';

export const PageQuantityWrapper = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 38px;
  padding: 0 0 20px;
  width: 350px;
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