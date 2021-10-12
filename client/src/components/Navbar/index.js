import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Layout } from 'antd';

import theme from '../../theme';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

import NavRoutes from './NavRoutes';
import MobileMenu from './MobileMenu';

import * as S from './style';
const { Sider } = Layout;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });
  return isTablet ? (
    <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
  ) : (
    <Sider
      style={{
        background: 'transparent',
      }}
      width={'20.416vw'}
    >
      <S.SideContent>
        <Link to="/">
          <Logo style={{ marginBottom: 100 }} />
        </Link>
        <NavRoutes />
      </S.SideContent>
    </Sider>
  );
};

export default Navbar;
