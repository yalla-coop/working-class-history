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

const ArticleTag = ({ shape, shapeColor, label, value }) => {
  return (
    <S.Wrapper>
      <Shape shape={shape} shapeColor={shapeColor} />
      <T.H4 color="neutral" weight="bold" ml="5">
        {label}
      </T.H4>
      <T.P ml="4">{value}</T.P>
    </S.Wrapper>
  );
};

export default ArticleTag;
