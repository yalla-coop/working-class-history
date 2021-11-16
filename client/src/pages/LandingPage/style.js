import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import { HashLink } from 'react-router-hash-link';

export const MapSection = styled.section`
  ${setMargin};

  position: relative;
  width: calc(
    100% - ${({ theme }) => theme.constants.gridGutter.desktop / 2}px
  );
  height: 836px;
  display: flex;
  padding-right: ${({ theme }) => theme.constants.gridGutter.desktop / 2}px;
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding-right: 0;
  }
`;

export const MapWrapper = styled.div`
  width: calc(100% + 20.416vw);
  height: 100%;
  position: absolute;
  left: -20.416vw;
  ${({ theme }) => theme.media.tablet} {
    width: calc(100% + 16.7vw);
    left: -8.43vw;
  }

  ${({ theme }) => theme.media.mobile} {
    width: calc(100% + 13vw);
    left: -6.551vw;
  }
`;

export const HashRoute = styled(HashLink)`
  font-style: normal;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.neutral} !important;
  text-transform: initial !important;
  text-align: left !important;
  font-size: 16px !important;
  line-height: 210% !important;
  font-weight: 300 !important;
  -webkit-text-decoration: underline !important;
  text-decoration: underline !important;
`;

export const TestP = styled.p`
  font-size: 28px;
  color: ${(props) => props.color};
`;
