import * as S from './style';
import * as T from '../../Typography';

const Shape = ({ shape, shapeColor }) => {
  if (shape === 'circle') {
    return <S.Circle shapeColor={shapeColor} />;
  }
  if (shape === 'triangle') {
    return <S.Triangle shapeColor={shapeColor} />;
  }
  return <S.Square shapeColor={shapeColor} />;
};

const Reason = ({ shape, shapeColor, title, text, ...props }) => {
  return (
    <>
      <S.Container {...props}>
        <Shape shape={shape} shapeColor={shapeColor} />
        <S.Content>
          <T.H4
            color="neutral"
            weight="bold"
            ml="2"
            mt="1"
            style={{ display: 'inline', width: 160 }}
          >
            {title}
          </T.H4>{' '}
          <T.P style={{ display: 'inline' }}>{text}</T.P>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Reason;
