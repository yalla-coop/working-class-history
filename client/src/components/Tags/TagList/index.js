import * as S from './style';
import * as T from '../../Typography';
import { GENERAL } from '../../../constants/nav-routes';

const TagList = ({ tagsList = [], ...props }) => {
  return (
    <S.Wrapper {...props}>
      {tagsList.map((tag, index) => (
        <>
          <S.TagLink
            key={tag.id}
            to={GENERAL.TAG.replace(':tagId', tag.id).replace(
              ':tagName',
              tag.name
            )}
          >
            <T.P>{tag.label}</T.P>
          </S.TagLink>
          {index !== tagsList.length - 1 && <S.Edge />}
        </>
      ))}
    </S.Wrapper>
  );
};

export default TagList;
