import React from 'react';
import * as S from './style';
import { ReactComponent as Logo } from '../../../components/assets/logo.svg';

const Message = ({ children, ...props }) => {
  return (
    <>
      <S.Wrapper {...props}>
        <S.LogoWrapper to="/">
          <Logo />
        </S.LogoWrapper>
        <S.Squire />
        <S.Side>
          <S.BlueDiv />
          <S.Circle />
        </S.Side>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </>
  );
};

export default Message;
