import styled from '@emotion/styled';
import { Layout } from 'antd';
import setMargin from '../../../helpers/set-margin';

import { Link } from 'react-router-dom';

const { Footer: AntFooter } = Layout;
export const Wrapper = styled(AntFooter)`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondaryMid};
  color: ${({ theme }) => theme.colors.white};
  padding: 3.61% 20.416vw;
  ${({ theme }) => theme.media.tablet} {
    padding: 3.61% 8.43vw;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 3.61% 6.551vw;
  }
`;

export const IconsWrapper = styled.div`
  ${setMargin};
  display: flex;
`;

export const IconLink = styled(Link)`
  ${setMargin};
`;
