import styled from '@emotion/styled';
import * as T from '../Typography';
export const Wrapper = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
`;

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -2;
`;

export const NumberContainer = styled(T.H0)`
  position: absolute;
  top: 104px;
  z-index: -1;
`;
