import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';

import * as S from './style';
import { Icon } from '../../components';

const SocialSection = ({ url }) => {
  return (
    <S.SocialLinksWrapper>
      <EmailShareButton url={url}>
        <Icon color="secondaryMid" icon="emailShare" />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <Icon color="secondaryMid" icon="facebookShare" />
      </FacebookShareButton>

      <TwitterShareButton url={url}>
        <Icon color="secondaryMid" icon="twitterShare" />
      </TwitterShareButton>
    </S.SocialLinksWrapper>
  );
};

export default SocialSection;