import * as S from './style';
import { Typography as T } from '../../components';
import { ADMIN } from '../../constants/nav-routes';

const RejectedPage = () => {
  return (
    <S.Wrapper>
      <T.H1 mt="0" mtM="6" color="white">
        Rejected
      </T.H1>
      <T.P mt="7" mtM="5" color="white" style={{ maxWidth: 470 }}>
        All done. If you have have, please email{' '}
        <S.Email href="mailto: example@gmail.com">example@gmail.com </S.Email>{' '}
        to explain why they were rejected
      </T.P>
      <S.ButtonWrapper>
        <S.StyledButton bgColor="neutral" to={ADMIN.AWAITING_REVIEW}>
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

export default RejectedPage;
