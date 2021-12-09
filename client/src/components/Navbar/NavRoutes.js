import { GENERAL, EXTERNAL } from '../../constants/nav-routes';

import * as S from './style';
import * as T from '../Typography';
import { useAuth } from '../../context/auth';

const handleClick = (cb) => {
  if (typeof cb === 'function') {
    return cb(false);
  }
  return;
};

const Routes = ({ setOpen }) => {
  const { logout, user } = useAuth();
  return (
    <>
      <T.H4 weight="bold" mb="1" mt="2">
        Menu
      </T.H4>

      <S.Div>
        <S.MenuLink to={GENERAL.STORIES} onClick={() => handleClick(setOpen)}>
          <T.P weight="regular" color="neutral">
            Stories Home
          </T.P>
        </S.MenuLink>
        <S.MenuLink to={GENERAL.INDEX} onClick={() => handleClick(setOpen)}>
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
          to={{ pathname: EXTERNAL.PODCAST }}
          target="_blank"
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Podcast
          </T.P>
        </S.MenuLink>
        <S.MenuLink
          to={{ pathname: EXTERNAL.SIGN_UP }}
          target="_blank"
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Sign Up
          </T.P>
        </S.MenuLink>

        <S.MenuLink
          to={{ pathname: EXTERNAL.SUPPORT }}
          target="_blank"
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Support Us
          </T.P>
        </S.MenuLink>
        <S.MenuLink
          to={GENERAL.CONTRIBUTE}
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Contribute
          </T.P>
        </S.MenuLink>
        <S.MenuLink
          to={{ pathname: EXTERNAL.SHOP }}
          target="_blank"
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            Shop
          </T.P>
        </S.MenuLink>
        <S.MenuLink
          to={{ pathname: EXTERNAL.WCH_HOME }}
          target="_blank"
          onClick={() => handleClick(setOpen)}
        >
          <T.P weight="regular" color="neutral">
            WCH Home
          </T.P>
        </S.MenuLink>
        {user?.id && (
          <S.MenuLink
            to={{ pathname: GENERAL.STORIES }}
            onClick={() => {
              logout();
              handleClick(setOpen);
            }}
          >
            <T.P weight="regular" color="neutral">
              Log out
            </T.P>
          </S.MenuLink>
        )}
      </S.Div>
    </>
  );
};

export default Routes;
