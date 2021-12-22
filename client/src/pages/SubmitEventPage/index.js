import * as S from './style';
import { Typography as T } from '../../components';
import { GENERAL } from '../../constants/nav-routes';

const SubmitEventPage = () => {
  return (
    <S.Wrapper>
      <T.H1 mt="0" mtM="6" color="white">
        Amazing!
      </T.H1>
      <T.P
        mt="7"
        mtM="5"
        color="white"
        style={{
          maxWidth: 400,
          paddingRight: '32px',
          position: 'relative',
          mixBlendMode: 'difference',
        }}
      >
        Thanks for contributing. we'll give your article a review. Our article
        curation is run by volunteers but we’ll do our best to email you with
        confirmation once approved.
      </T.P>
      <S.ButtonWrapper>
        <S.StyledButton bgColor="neutral" to={GENERAL.LandingPage}>
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

export default SubmitEventPage;
