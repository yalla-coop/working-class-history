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
          <T.P>
            <span style={{ fontWeight: 'bold' }}> {title}</span> {text}
          </T.P>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Reason;
