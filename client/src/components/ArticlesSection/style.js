import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.section`
  ${setMargin};
  position: relative;
`;

export const ShapesWrapper = styled.div`
  height: 100%;
  position: absolute;
  padding: 80px;
  top: 0;
  left: -20.416vw;
  width: 20.416vw;
  overflow: hidden;
  display: block;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Block = styled.div`
  position: absolute;
  width: 100%;
  right: 80px;
  height: 100px;
  top: ${({ top }) => top || '35%'};
  background-color: ${({ color, theme }) =>
    color ? theme.colors[color] || color : theme.colors.primaryMain};
`;
