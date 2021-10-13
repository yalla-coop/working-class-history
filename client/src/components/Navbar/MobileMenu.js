// Burger\
import Icon from '../Icon';
import * as S from './style';
import { ReactComponent as Logo } from '../assets/logo.svg';

import NavRoutes from './NavRoutes';

const MobileMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <S.MobileMenuWrapper>
        <S.IconWrapper onClick={() => setOpenMenu(true)}>
          <Icon icon="burger" style={{ cursor: 'pointer' }} />
        </S.IconWrapper>
      </S.MobileMenuWrapper>
      <S.Drawer
        placement="left"
        closable={false}
        onClose={() => setOpenMenu(false)}
        visible={openMenu}
        key="left"
        maskStyle={{ display: 'none' }}
        headerStyle={{ display: 'none' }}
        width="100%"
        drawerStyle={{ background: 'white', display: 'flex' }}
      >
        <div>
          <S.IconWrapper onClick={() => setOpenMenu(false)} mb="7">
            <Icon icon="close" style={{ cursor: 'pointer' }} />
          </S.IconWrapper>

          <NavRoutes setOpen={setOpenMenu} />
        </div>
        <S.Link to="/" onClick={() => setOpenMenu(false)}>
          <Logo />
        </S.Link>
      </S.Drawer>
    </>
  );
};

export default MobileMenu;
