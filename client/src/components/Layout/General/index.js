import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Navbar from '../../Navbar';

const General = ({ children, goBack, maxWidth = '774px', ...props }) => {
  return (
    <>
      <S.Wrapper {...props}>
        <Navbar />
        <S.Content maxWidth={maxWidth}>{children}</S.Content>
      </S.Wrapper>
    </>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
