import * as S from './style';
import { Typography as T } from '../../components';
import { GENERAL } from '../../constants/nav-routes';

const SuccessSignupPage = () => {
  return (
    <S.Wrapper>
      <T.H1 mt="0" mtM="6" color="white">
        All done!
      </T.H1>
      <T.P
        mt="7"
        mtM="5"
        color="white"
        style={{ maxWidth: 470, paddingRight: 16 }}
      >
        WCH will be in touch as soon as possible!
      </T.P>
      <S.ButtonWrapper>
        <S.StyledButton bgColor="neutral" to={GENERAL.STORIES}>
          <T.P
            size="extraLarge"
            weight="semi"
            color="primaryMain"
            style={{ fontFamily: "'Zilla Slab', serif" }}
          >
            Return
          </T.P>
          <T.P
            size="extraLarge"
            weight="semi"
            color="primaryMain"
            mt="2"
            mtM="0"
            style={{ fontFamily: "'Zilla Slab', serif" }}
          >
            home
          </T.P>
        </S.StyledButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default SuccessSignupPage;
