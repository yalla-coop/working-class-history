import styled from '@emotion/styled';
import theme from './../../theme';
import setMargin from '../../helpers/set-margin';
import * as T from '../Typography';

// ICONS

import GoBack from './icons/GoBack';
import ArrowDown from './icons/ArrowDown';
import Burger from './icons/Burger';
import Close from './icons/Close';
import Instagram from './icons/Instagram';
import Facebook from './icons/Facebook';
import Twitter from './icons/Twitter';
import Tumblr from './icons/Tumblr';
import Mastodon from './icons/Mastodon';
import Youtube from './icons/Youtube';
import FacebookShare from './icons/FacebookShare';
import EmailShare from './icons/EmailShare';
import TwitterShare from './icons/TwitterShare';
import TikTok from './icons/TikTok';

export const IconMap = {
  goBack: GoBack,
  arrowDown: ArrowDown,
  burger: Burger,
  close: Close,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  tumblr: Tumblr,
  mastodon: Mastodon,
  youtube: Youtube,
  facebookShare: FacebookShare,
  emailShare: EmailShare,
  twitterShare: TwitterShare,
  tikTok: TikTok,
};

const Icon = (props) => {
  const { icon, color, text, jc, weight = 'bold' } = props;

  if (!IconMap[icon]) {
    // eslint-disable-next-line no-console
    console.warn(`<Icon /> called with invalid icon prop "${icon}"`);
    return null;
  }

  const StyledIcon = IconMap[icon];

  const Parent = styled.div`
    ${setMargin}
    display: flex;
    align-items: center;
    justify-content: ${jc || 'flex-start'};
  `;

  return (
    <Parent {...props}>
      <StyledIcon
        {...props}
        color={theme.colors[color] || color || 'currentColor'}
      />
      {text && (
        <T.P weight={weight} ml="1" color={color}>
          {text}
        </T.P>
      )}
    </Parent>
  );
};

export default Icon;
