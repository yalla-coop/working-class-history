import * as S from './style';

const Card = ({ bgColor, children }) => {
  return <S.Card bgColor={bgColor}>{children}</S.Card>;
};

export default Card;
