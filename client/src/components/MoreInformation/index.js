import * as T from '../Typography';
import * as S from './style';

const MoreInformation = ({ subtitle, link }) => {
  return (
    <S.Wrapper>
      <T.H3 mb="5" color="neutral">
        More information
      </T.H3>
      <T.P weight="light">{subtitle}</T.P>
      <T.Link to={link} external>
        <T.P weight="light" underline color="neutral">
          {link}
        </T.P>
      </T.Link>
    </S.Wrapper>
  );
};

export default MoreInformation;
