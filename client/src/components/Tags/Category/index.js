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

const Category = ({ shape, shapeColor, text, to }) => {
  return (
    <S.Wrapper to={to}>
      <Shape shape={shape} shapeColor={shapeColor} />
      <T.H4 color="neutral" weight="bold" ml="2">
        {text}
      </T.H4>
    </S.Wrapper>
  );
};

export default Category;
