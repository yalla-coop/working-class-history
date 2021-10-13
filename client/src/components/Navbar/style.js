import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import { Drawer as AntDrawer } from 'antd';
import setMargin from '../../helpers/set-margin';

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 0;
  position: relative;
  z-index: 2;
`;

export const Link = styled(RouterLink)`
  white-space: nowrap;
  display: flex;
  justify-content: flex-start;
  ${({ theme }) => theme.media.tablet} {
    justify-content: flex-end;
  }
`;

export const MenuLink = styled(Link)`
  margin-top: ${({ theme }) => theme.spacings[4]};
`;

export const Drawer = styled(AntDrawer)`
  .ant-drawer-body {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 12.26%;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${({ theme }) => theme.spacings[1]};
      background: ${({ theme }) => theme.colors.primaryMain};
    }
  }
`;

export const SideContent = styled.div`
  padding: 80px;
`;

export const MobileMenuWrapper = styled.header`
  padding: 24px;
`;

export const IconWrapper = styled.button`
  ${setMargin};
  background: none;
  border: none;
  outline: none;
`;
