// import { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { Layout } from 'antd';
import NavRoutes from './NavRoutes';
// import theme from '../../theme';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

import * as S from './style';
const { Sider } = Layout;
const NavItems = ({ setOpen }) => {
  return (
    <S.Div>
      <NavRoutes setOpen={setOpen} />
    </S.Div>
  );
};
const Navbar = () => {
  // const isTablet = useMediaQuery({
  //   query: `(max-width: ${theme.breakpoints.tablet})`,
  // });
  return (
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
        <p style={{ fontSize: 20, fontWeight: 'bold' }}>Menu</p>
        <NavItems />
      </S.SideContent>
    </Sider>
  );

  // return (
  //   <>
  //     <Icon icon="menu" width={20} height={20} onClick={() => setOpen(true)} />
  //     <S.Drawer
  //       title="Basic Drawer"
  //       placement={'left'}
  //       closable={false}
  //       visible={open}
  //       key={'placement'}
  //       maskStyle={{ display: 'none' }}
  //       headerStyle={{ display: 'none' }}
  //       width="100%"
  //       drawerStyle={{ background: 'white', display: 'flex' }}
  //     >
  //       <Icon
  //         icon="cross"
  //         width={18}
  //         height={18}
  //         onClick={() => setOpen(false)}
  //         style={{
  //           display: 'flex',
  //           justifyContent: 'flex-end',
  //           position: 'relative',
  //           zIndex: 2,
  //         }}
  //       />
  //       <NavItems setOpen={setOpen} />
  //       {/* <S.RainbowContainer>
  //         <Image image="rainbow" customStyle={{ width: '100%' }} />
  //       </S.RainbowContainer> */}
  //     </S.Drawer>
  //   </>
  // );
};

export default Navbar;
