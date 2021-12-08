import React from 'react';
import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import HaitianRevolution from '../assets/HaitianRevolution.png';
import HaitianRevolution2 from '../assets/HaitianRevolution2.png';
import LandingPage_1 from '../assets/landingPage_1.jpg';
import LandingPage_2 from '../assets/landingPage_2.jpg';
import LandingPage_3 from '../assets/landingPage_3.jpg';
import LandingPage_4 from '../assets/landingPage_4.jpg';
import LandingPage_5 from '../assets/landingPage_5.jpg';
import Latest from '../assets/Latest.png';
import Map from '../assets/Map.png';

export const imgMap = {
  haitianRevolution: HaitianRevolution,
  haitianRevolution2: HaitianRevolution2,
  latest: Latest,
  map: Map,
  landingPage_1: LandingPage_1,
  landingPage_2: LandingPage_2,
  landingPage_3: LandingPage_3,
  landingPage_4: LandingPage_4,
  landingPage_5: LandingPage_5,
};

const StyledImage = styled.img`
  max-width: 100%;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  ${setMargin}
`;

const Image = ({
  image,
  width,
  height,
  margin,
  src,
  alt = 'Therapy Illustration',
  customStyle,
  ...props
}) => {
  if (!imgMap[image] && !src) {
    // eslint-disable-next-line no-console
    console.warn(`<Image /> called with invalid image prop "${image}"`);
    return null;
  }

  return (
    <StyledImage
      src={src || imgMap[image]}
      alt={alt}
      width={width}
      height={height}
      margin={margin}
      style={{ ...customStyle }}
      {...props}
    />
  );
};

export default Image;
