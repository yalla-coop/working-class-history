import * as S from './style';
import * as T from '../../Typography';

const Shape = ({ shape, shapeColor, size }) => {
  if (shape === 'circle') {
    return <S.Circle shapeColor={shapeColor} size={size} />;
  }
  if (shape === 'triangle') {
    return <S.Triangle shapeColor={shapeColor} size={size} />;
  }
  return <S.Square shapeColor={shapeColor} size={size} />;
};

const Category = ({
  shape,
  shapeColor,
  title,
  to,
  relatedTags,
  size,
  ...props
}) => {
  return (
    <S.Container {...props}>
      <S.CategoryWrapper to={to}>
        <S.Center>
          <Shape shape={shape} shapeColor={shapeColor} size={size} />

          <T.H4 color="neutral" weight="bold" ml="2">
            {title}
          </T.H4>
        </S.Center>
      </S.CategoryWrapper>
      {relatedTags && (
        <S.TagsWrapper>
          {relatedTags.map((tag) => (
            <S.TagLink key={tag.to} to={tag.to}>
              <T.P ml="3">{tag.title}</T.P>
            </S.TagLink>
          ))}
        </S.TagsWrapper>
      )}
    </S.Container>
  );
};

export default Category;
