import { GENERAL } from '../../constants/nav-routes';

import * as S from './style';
import * as T from '../Typography';

const handleClick = (cb) => {
  if (typeof cb === 'function') {
    return cb(false);
  }
  return;
};

const Routes = ({ setOpen }) => {
  return (
    <>
      <T.H4 weight="bold" mb="1" mt="2">
        Menu
      </T.H4>

      <S.Div>
        <S.MenuLink
          to={GENERAL['STORIES']}
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Stories Home
          </T.P>
        </S.MenuLink>
        <S.MenuLink to={GENERAL['INDEX']} onClick={() => handleClick(setOpen)}>
          <T.P weight="regular" color="neutral">
            Index
          </T.P>
        </S.MenuLink>
        <S.MenuHashLink
          to={`${GENERAL['LandingPage']}#map`}
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Map
          </T.P>
        </S.MenuHashLink>
        <S.MenuLink
          to={GENERAL['PODCAST']}
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Podcast
          </T.P>
        </S.MenuLink>
        <S.MenuLink
          to={GENERAL['SIGN_UP']}
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Sign Up
          </T.P>
        </S.MenuLink>
        <S.MenuLink
          to={GENERAL['SUPPORT_US']}
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Support Us
          </T.P>
        </S.MenuLink>
        <S.MenuLink to={GENERAL['SHOP']} onClick={() => handleClick(setOpen)}>
          <T.P weight="regular" color="neutral">
            Shop
          </T.P>
        </S.MenuLink>
        <S.MenuLink
          to={GENERAL['WCH_HOME']}
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            WCH Home
          </T.P>
        </S.MenuLink>
      </S.Div>
    </>
  );
};

export default Routes;
