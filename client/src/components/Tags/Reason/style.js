import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Container = styled.div`
  ${setMargin};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 45px solid transparent;
  border-bottom: 45px solid transparent;
  border-left: ${({ theme, shapeColor }) =>
    `90px solid ${
      shapeColor ? theme.colors[shapeColor] || shapeColor : theme.colors.neutral
    }`};
`;

export const Circle = styled.div`
  min-width: 86px;
  width: 86px;
  height: 86px;
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.tertiaryMain};
  border-radius: 50%;
`;

export const Square = styled.div`
  width: 86px;
  height: 86px;
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.primaryMain};
`;
