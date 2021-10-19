import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: ${({ maxWidth, theme: { maxWidths } }) =>
    maxWidth || maxWidths.desktop};
  padding: ${({ landingPage }) =>
    landingPage ? `126px 0 190px 0` : `247px 0 190px 0`};
  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme: { spacings } }) => `${spacings[7]} 8.43vw`};
  }

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme: { spacings } }) =>
      `${spacings[6]} 6.551vw ${spacings[8]} 6.551vw`};
  }
`;
