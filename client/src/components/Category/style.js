import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  ${setMargin};
  display: flex;
  align-items: center;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: ${({ theme, shapeColor }) =>
    `20px solid ${
      shapeColor ? theme.colors[shapeColor] || shapeColor : theme.colors.neutral
    }`};
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.tertiaryMain};
  border-radius: 50%;
`;

export const Square = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.primaryMain};
`;
