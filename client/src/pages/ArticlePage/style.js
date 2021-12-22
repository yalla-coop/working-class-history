import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Div = styled.div``;

export const MapSection = styled.section`
  ${setMargin};

  position: relative;
  width: calc(
    100% - ${({ theme }) => theme.constants.gridGutter.desktop / 2}px
  );
  height: 510px;
  display: flex;
  padding-right: ${({ theme }) => theme.constants.gridGutter.desktop / 2}px;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const SocialLinksWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: -45px;
  top: ${({ hasMedia }) => (hasMedia ? '36px' : '-6px')};
  svg {
    margin-top: ${({ theme }) => theme.spacings[4]};
    margin-bottom: ${({ theme }) => theme.spacings[0]};
  }
  ${({ theme }) => theme.media.tablet} {
    position: static;
    flex-direction: row;
    width: 90px;
    justify-content: space-between;
    svg {
      margin-top: ${({ theme }) => theme.spacings[5]};
      margin-bottom: ${({ theme }) => theme.spacings[1]};
      margin-right: ${({ theme }) => theme.spacings[4]};
    }
  }
`;

export const ArticleContent = styled.article`
  position: relative;
`;

export const RichText = styled.div`
  ${setMargin};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 210%;
  font-weight: 300;
  ol,
  ul,
  dl {
    margin-left: ${({ theme }) => theme.spacings[6]};
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 210%;
    font-weight: 300;
    pre {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
    }
  }
  a {
    font-size: 16px !important;
    line-height: 210% !important;
    font-weight: 300 !important;
    font-style: normal !important;
    letter-spacing: 0.2px !important;
    color: ${({ theme }) => `${theme.colors.secondaryMid} !important`};
    text-transform: initial !important;
    text-align: left !important;
    text-decoration: underline;
    font-family: 'Roboto', sans-serif;
  }
`;
