import styled from '@emotion/styled';
import { Button } from '../../components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  position: static;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 30vw;
  margin-top: 75px;
  ${({ theme }) => theme.media.tablet} {
    margin-top: 0;
    padding-right: 0;
    position: absolute;
    right: -8vw;
    bottom: 0;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: auto !important;
  align-items: flex-start;
  ${({ theme }) => theme.media.tablet} {
    width: 296px;
  }
`;
