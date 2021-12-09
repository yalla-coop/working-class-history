import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  padding-left: 20.416vw;
  background-color: transparent;
  ${({ theme }) => theme.media.tablet} {
    background-color: ${({ theme }) => theme.colors.tertiaryMain};
    flex-direction: column;
    padding: 8vw;
  }
`;

export const Side = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20.416vw;
  display: block;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Squire = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primaryMain};
  width: 22vw;
  height: 22vw;
  display: block;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const BlueDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondaryMid};
  height: 50vh;
  clip-path: polygon(0 45%, 100% 0%, 100% 100%, 0% 100%);
  z-index: -1;
  display: block;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Circle = styled.div`
  position: absolute;
  z-index: -2;
  left: -30%;
  top: -15%;
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
  border-radius: 50%;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  height: 130vh;
  width: 130vh;
  min-width: 50vw;
`;

export const LogoWrapper = styled(Link)`
  position: absolute;
  left: 80px;
  top: 80px;
  cursor: pointer;
  z-index: 10;
  ${({ theme }) => theme.media.tablet} {
    position: static;
  }
`;

export const Content = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `27.4vh ${theme.spacings[5]}`};
  ${({ theme }) => theme.media.tablet} {
    padding: 0;
  }
`;
