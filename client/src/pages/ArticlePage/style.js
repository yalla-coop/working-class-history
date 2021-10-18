import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Div = styled.div``;

export const MapSection = styled.section`
  ${setMargin};

  border: 1px solid green;
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
  left: -55px;
  top: 36px;
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
      margin-bottom: ${({ theme }) => theme.spacings[1]};
      margin-right: ${({ theme }) => theme.spacings[4]};
    }
  }
`;

export const ArticleContent = styled.article`
  position: relative;
`;
