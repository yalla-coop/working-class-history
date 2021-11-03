import styled from '@emotion/styled';
import * as T from '../Typography';
export const Wrapper = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
`;

export const Container = styled.div`
  position: fixed;
  display: block;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const NumberContainer = styled(T.H0)`
  position: fixed;
  top: 104px;
  font-size: 120px !important;
  font-family: 'Zilla Slab', serif;
  position: fixed;
`;
