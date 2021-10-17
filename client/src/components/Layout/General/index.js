import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import Navbar from '../../Navbar';
import Footer from '../Footer';

const General = ({
  children,
  goBack,
  maxWidth = '774px',
  landingPage,
  ...props
}) => {
  return (
    <>
      <S.Wrapper {...props}>
        <Navbar />
        <S.Content maxWidth={maxWidth} landingPage={landingPage}>
          {children}
        </S.Content>
      </S.Wrapper>
      <Footer />
    </>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
