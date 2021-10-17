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
  height: 836px;
  display: flex;
  padding-right: ${({ theme }) => theme.constants.gridGutter.desktop / 2}px;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  width: calc(100% + 20.416vw);
  height: 100%;
  background-color: gold;
  position: absolute;
  left: -20.416vw;
`;
