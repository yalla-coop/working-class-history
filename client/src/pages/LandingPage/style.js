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
  ${({ theme }) => theme.media.tablet} {
    height: 600px;
  }
  ${({ theme }) => theme.media.mobile} {
    height: 400px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
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

export const LoadMore = styled.button`
  outline: none;
  border: none;
  background: none;
  margin-top: ${({ theme }) => theme.spacings[6]};
  cursor: pointer;
`;
