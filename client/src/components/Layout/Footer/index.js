import { useMediaQuery } from 'react-responsive';

import * as T from '../../Typography';
import Icon from '../../Icon';
import * as S from './style';
import theme from '../../../theme';
import { EXTERNAL } from '../../../constants/nav-routes';

const Footer = () => {
  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.mobile})`,
  });
  let iconDimensions = '32';
  if (isTablet) {
    iconDimensions = '24';
  }
  if (isMobile) {
    iconDimensions = '18';
  }
  return (
    <S.Wrapper>
      <T.H4 color="white">Follow us</T.H4>
      <S.IconsWrapper mt="5" mtT="4" mtM="3">
        <S.IconLink
          mr="4"
          to={{ pathname: EXTERNAL.INSTAGRAM }}
          target="_blank"
        >
          <Icon
            icon="instagram"
            color="white"
            width={iconDimensions}
            height={iconDimensions}
          />
        </S.IconLink>
        <S.IconLink mr="4" to={{ pathname: EXTERNAL.FACEBOOK }} target="_blank">
          <Icon
            icon="facebook"
            color="white"
            width={iconDimensions}
            height={iconDimensions}
          />
        </S.IconLink>
        <S.IconLink mr="4" to={{ pathname: EXTERNAL.TWITTER }} target="_blank">
          <Icon
            icon="twitter"
            color="white"
            width={iconDimensions}
            height={iconDimensions}
          />
        </S.IconLink>
        <S.IconLink mr="4" to={{ pathname: EXTERNAL.TUMBLER }} target="_blank">
          <Icon
            icon="tumblr"
            color="white"
            width={iconDimensions}
            height={iconDimensions}
          />
        </S.IconLink>
        <S.IconLink mr="4" to={{ pathname: EXTERNAL.MASTODON }} target="_blank">
          <Icon
            icon="mastodon"
            color="white"
            width={iconDimensions}
            height={iconDimensions}
          />
        </S.IconLink>
        <S.IconLink mr="4" to={{ pathname: EXTERNAL.YOUTUBE }} target="_blank">
          <Icon
            icon="youtube"
            color="white"
            width={iconDimensions}
            height={iconDimensions}
          />
        </S.IconLink>
        <S.IconLink mr="4" to={{ pathname: EXTERNAL.TIKTOK }} target="_blank">
          <Icon
            icon="tikTok"
            color="white"
            width={iconDimensions}
            height={iconDimensions}
          />
        </S.IconLink>
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default Footer;
