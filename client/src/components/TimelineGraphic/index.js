import { ReactComponent as LongTimeline } from '../assets/LongTimeline.svg';
import { ReactComponent as ShortTimeline } from '../assets/ShortTimeline.svg';
import * as S from './style';
const TimelineGraphic = ({ type = 'short', number }) => {
  return (
    <S.Container>
      <S.Wrapper>
        {type === 'short' ? <ShortTimeline /> : <LongTimeline />}
        {number && (
          <S.NumberContainer color="tertiaryMain">{number}</S.NumberContainer>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default TimelineGraphic;
