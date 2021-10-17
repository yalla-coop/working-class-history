import * as S from './style';

const Card = ({ bgColor, children, ...props }) => {
  return (
    <S.Card bgColor={bgColor} {...props}>
      {children}
    </S.Card>
  );
};

export default Card;
