import * as S from './style';
import * as T from '../../Typography';
import { GENERAL } from '../../../constants/nav-routes';
import * as Tag from '../../../api-calls/Tag';

const TagList = ({
  tagsList = [],
  nextData,
  setNextData,
  setTags,
  setLoading,
  setPageError,
  showItems,
  setShowItems,
  ...props
}) => {
  const handleMore = async () => {
    setShowItems(showItems + 50);
    if (showItems % 90 && nextData) {
      try {
        setLoading(true);
        const { error, data } = await Tag.getNextTags({
          nextUrl: nextData,
        });
        setTags((recentData) => [...recentData, ...data.results]);
        setNextData(data.next);
        setLoading(false);
        if (error) {
          setPageError(error.message);
        }
      } catch (error) {
        setPageError(error.message);
        setLoading(false);
      }
    }
  };
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
      {tagsList.length >= showItems && (
        <S.LoadMore onClick={handleMore}>
          <T.P underline>Load more...</T.P>
        </S.LoadMore>
      )}
    </S.Wrapper>
  );
};

export default TagList;
