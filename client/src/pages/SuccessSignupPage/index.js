import * as S from './style';
import { Typography as T } from '../../components';

const SuccessSignupPage = () => {
  return (
    <S.Wrapper>
      <T.H1 mt="0" mtM="6" color="white">
        All done!
      </T.H1>
      <T.P mt="7" mtM="5" color="white" style={{ maxWidth: 470 }}>
        WCH will be in touch as soon as possible!
      </T.P>
    </S.Wrapper>
  );
};

export default SuccessSignupPage;
