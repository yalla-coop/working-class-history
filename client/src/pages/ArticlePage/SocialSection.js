import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';

import * as S from './style';
import { Icon } from '../../components';

const SocialSection = ({ url, hasMedia, image, title }) => {
  return (
    <S.SocialLinksWrapper hasMedia={hasMedia}>
      <EmailShareButton
        url={url}
        subject="Story on Working Class History"
        body={title}
        media={image}
      >
        <Icon color="secondaryMid" icon="emailShare" />
      </EmailShareButton>
      <FacebookShareButton url={url} imageUrl={image} quote={title}>
        <Icon color="secondaryMid" icon="facebookShare" />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        media={image}
        title={title}
        via="wrkclasshistory"
      >
        <Icon color="secondaryMid" icon="twitterShare" />
      </TwitterShareButton>
    </S.SocialLinksWrapper>
  );
};

export default SocialSection;
