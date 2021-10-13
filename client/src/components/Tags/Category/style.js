import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const CategoryWrapper = styled(Link)`
  ${setMargin};
  display: flex;
  align-items: flex-start;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings[1]};
`;
export const TagLink = styled(Link)``;

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
