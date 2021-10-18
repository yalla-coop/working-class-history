import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Wrapper = styled.div`
  ${setMargin};
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.mobile} {
    align-items: flex-start;
  }
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: ${({ theme, shapeColor }) =>
    `16px solid ${
      shapeColor
        ? theme.colors[shapeColor] || shapeColor
        : theme.colors.primaryMain
    }`};
  ${({ theme }) => theme.media.mobile} {
    margin-top: ${({ theme }) => theme.spacings[1]};
  }
`;

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.primaryMain};
  border-radius: 50%;
  ${({ theme }) => theme.media.mobile} {
    margin-top: ${({ theme }) => theme.spacings[1]};
  }
`;

export const Square = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.primaryMain};
  ${({ theme }) => theme.media.mobile} {
    margin-top: ${({ theme }) => theme.spacings[1]};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;
