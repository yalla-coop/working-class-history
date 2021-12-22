import { ReactComponent as LongTimeline } from '../assets/LongTimeline.svg';
import { ReactComponent as ShortTimeline } from '../assets/ShortTimeline.svg';
import { ReactComponent as FloatingCircle } from '../assets/FloatingCircle.svg';
import * as S from './style';
const TimelineGraphic = ({ type, number }) => {
  return (
    <S.Container>
      <S.Wrapper>
        {type === 'short' ? <ShortTimeline /> : <LongTimeline />}
      </S.Wrapper>
      <S.Float>
        {number && (
          <S.NumberContainer color="tertiaryMain">{number}</S.NumberContainer>
        )}
        <FloatingCircle />
      </S.Float>
    </S.Container>
  );
};

export default TimelineGraphic;
