import * as S from './style';
import * as T from '../Typography';

import { MAP } from '../../constants/api-data';

const decideMapType = (type, id) => {
  if (!id) return MAP.GENERAL;

  switch (type) {
    case 'specific':
      return MAP.SPECIFIC.replace(':id', id);
    default:
      return MAP.GENERAL;
  }
};

const Map = ({ type = 'general', id, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        title="WCH-map"
        src={decideMapType(type, id)}
      ></iframe>
      <T.Link external underline to={decideMapType(type, id)}>
        View map here
      </T.Link>
    </S.Wrapper>
  );
};

export default Map;
