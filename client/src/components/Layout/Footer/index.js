import * as S from './style';
import * as T from '../../Typography';
import Icon from '../../Icon';

import { EXTERNAL } from '../../../constants/nav-routes';

const Footer = () => (
  <S.Wrapper>
    <T.H4 color="white">Follow us</T.H4>
    <S.IconsWrapper mt="5">
      <S.IconLink mr="4" to={{ pathname: EXTERNAL.INSTAGRAM }} target="_blank">
        <Icon icon="instagram" color="white" width="32" height="32" />
      </S.IconLink>
      <S.IconLink mr="4" to={{ pathname: EXTERNAL.FACEBOOK }} target="_blank">
        <Icon icon="facebook" color="white" width="32" height="32" />
      </S.IconLink>
      <S.IconLink mr="4" to={{ pathname: EXTERNAL.TWITTER }} target="_blank">
        <Icon icon="twitter" color="white" width="32" height="32" />
      </S.IconLink>
      <S.IconLink mr="4" to={{ pathname: EXTERNAL.TUMBLER }} target="_blank">
        <Icon icon="tumblr" color="white" width="32" height="32" />
      </S.IconLink>
      <S.IconLink mr="4" to={{ pathname: EXTERNAL.MASTODON }} target="_blank">
        <Icon icon="mastodon" color="white" width="32" height="32" />
      </S.IconLink>
      <S.IconLink mr="4" to={{ pathname: EXTERNAL.YOUTUBE }} target="_blank">
        <Icon icon="youtube" color="white" width="32" height="32" />
      </S.IconLink>
    </S.IconsWrapper>
  </S.Wrapper>
);

export default Footer;
