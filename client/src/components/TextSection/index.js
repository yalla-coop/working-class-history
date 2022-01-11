import { GENERAL } from '../../constants/nav-routes';
import * as T from '../Typography';
import * as S from './style';
import { getMonthName } from '../../helpers';

const renderTextPreview = (text) => {
  const htmlContent = text
    ?.split('>')
    ?.map((i) => i.split('<')[0])
    .filter((i) => !i.includes('=') && i.trim())
    .join('');

  if (htmlContent) {
    return htmlContent.length > 200
      ? `${htmlContent.substring(0, 200)}...`
      : `${htmlContent}...`;
  }
  if (text) {
    return text.length > 200 ? `${text.substring(0, 200)}...` : `${text}...`;
  }
  return 'N/A';
};

const TextSection = ({
  created_at,
  title,
  content,
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
        {renderTextPreview(description)}
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
