import { GENERAL } from '../../constants/nav-routes';
import * as T from '../Typography';
import * as S from './style';
import { getMonthName } from '../../helpers';

const TextSection = ({
  created_at,
  title,
  content,
  preview_text,
  id,
  to,
  year,
  day,
  month,
  description,
  ...props
}) => {
  return (
    <S.Wrapper {...props}>
      <T.P size="small" weight="medium" color="neutral">
        {year && month && day
          ? `${getMonthName(month)} ${day}, ${year}`
          : 'N/A'}
      </T.P>
      <S.ReadMore
        to={
          to ||
          GENERAL.ARTICLE.replace(':id', id).replace(
            ':articleName',
            title.replace(/\s+/g, '-').toLowerCase()
          )
        }
      >
        <T.H4 mt="4" mb="4" color="neutral">
          {title || 'N/A'}
        </T.H4>
      </S.ReadMore>
      <T.P
        mb="4"
        weight="light"
        ellipsis={{
          rows: 4,
          expandable: true,
          symbol: ' ',
        }}
      >
        {preview_text || description?.split('>')[1]?.split('<')[0] || 'N/A'}
      </T.P>
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
