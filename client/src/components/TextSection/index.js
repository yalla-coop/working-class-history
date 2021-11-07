import { GENERAL } from '../../constants/nav-routes';
import * as T from '../Typography';
import * as S from './style';
import { getMonthName } from '../../helpers';

const TextSection = ({
  date,
  created_at,
  title,
  content,
  description,
  id,
  to,
  year,
  day,
  month,
  ...props
}) => {
  return (
    <S.Wrapper {...props}>
      <T.P size="small" weight="medium" color="neutral">
        {year && month && day
          ? `${getMonthName(month)} ${day}, ${year}`
          : 'N/A'}
      </T.P>
      <T.H4 mt="4" mb="4" color="neutral">
        {title}
      </T.H4>
      <S.RichText
        unsafeHTML={description}
        maxLine="4"
        ellipsis="..."
        basedOn="letters"
      />
      <S.ReadMore
        to={
          to ||
          GENERAL.ARTICLE.replace(':id', id).replace(
            ':articleName',
            title.replace(/\s+/g, '-').toLowerCase()
          )
        }
      >
        <T.P size="small" weight="bold" underline color="neutral" mt="1">
          Continue reading...
        </T.P>
      </S.ReadMore>
    </S.Wrapper>
  );
};

export default TextSection;
