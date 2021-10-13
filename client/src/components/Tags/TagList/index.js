import * as S from './style';
import * as T from '../../Typography';

const TagList = ({ tagsList = [] }) => {
  return (
    <S.Wrapper>
      {tagsList.map((tag, index) => (
        <>
          <S.TagLink key={tag.to} to={tag.to}>
            <T.P>{tag.title}</T.P>
          </S.TagLink>
          {index !== tagsList.length - 1 && <S.Edge />}
        </>
      ))}
    </S.Wrapper>
  );
};

export default TagList;
