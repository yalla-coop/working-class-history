import { useState } from 'react';

import * as S from './style';
import * as T from '../../Typography';
import { GENERAL } from '../../../constants/nav-routes';

const TagList = ({ tagsList = [], ...props }) => {
  const [showItems, setShowItems] = useState(50);
  return (
    <S.Wrapper {...props}>
      {tagsList.slice(0, showItems).map((tag, index) => (
        <>
          <S.TagLink
            key={tag.id}
            to={GENERAL.TAG.replace(':tagId', tag.id).replace(
              ':tagName',
              tag.Title.replace(/\s+/g, '-').toLowerCase()
            )}
          >
            <T.P>{tag.label || tag.Title}</T.P>
          </S.TagLink>
          {index !== tagsList.length - 1 && <S.Edge />}
        </>
      ))}
      {tagsList.length > showItems && (
        <S.LoadMore onClick={() => setShowItems((old) => old + 20)}>
          <T.P underline>Load more...</T.P>
        </S.LoadMore>
      )}
    </S.Wrapper>
  );
};

export default TagList;
