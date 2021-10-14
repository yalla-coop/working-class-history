import { GENERAL } from '../../constants/nav-routes';
import * as T from '../Typography';
import * as S from './style';

const TextSection = ({ date, title, content, id }) => {
  return (
    <S.Wrapper>
      <T.P size="small" weight="medium" color="neutral">
        {date}
      </T.P>
      <T.H4 mt="4" mb="4" color="neutral">
        {title}
      </T.H4>
      <T.P
        mb="4"
        weight="light"
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: ' ',
        }}
      >
        {content}
      </T.P>
      <S.ReadMore to={GENERAL.ARTICLE.replace(':id', id)}>
        <T.P size="small" weight="medium" underline color="neutral">
          Continue reading...
        </T.P>
      </S.ReadMore>
    </S.Wrapper>
  );
};

export default TextSection;
