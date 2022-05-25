import * as S from './style';
import * as T from '../Typography';

import { MAP } from '../../constants/api-data';

const decideMapType = (type, id, longitude, latitude) => {
  if (!id || !longitude || !latitude) return MAP.GENERAL;

  switch (type) {
    case 'specific':
      return MAP.SPECIFIC.replace(':id', id)
        .replace(':long', longitude)
        .replace(':lat', latitude);
    default:
      return MAP.GENERAL;
  }
};

const Map = ({ type = 'general', id, longitude, latitude, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <iframe
        width="100%"
        height="95%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        title="WCH-map"
        src={decideMapType(type, id, longitude, latitude)}
      ></iframe>
      <T.Link
        external
        underline
        to={decideMapType(type, id, longitude, latitude)}
      >
        View map here
      </T.Link>
    </S.Wrapper>
  );
};

export default Map;
