import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${setMargin};
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

export const CategoryWrapper = styled(Link)`
  display: flex;
  align-items: flex-start;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.media.mobile} {
    margin-left: ${({ theme }) => theme.spacings[2]};
    margin-top: ${({ theme }) => theme.spacings[2]};
  }
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
  border-top: ${({ size }) =>
    size === 'small' ? '6px solid transparent' : '10px solid transparent'};
  border-bottom: ${({ size }) =>
    size === 'small' ? '6px solid transparent' : '10px solid transparent'};
  border-left: ${({ theme, shapeColor, size }) => {
    const width = size === 'small' ? '12px' : '20px';
    return `${width} solid ${
      shapeColor ? theme.colors[shapeColor] || shapeColor : theme.colors.neutral
    }`;
  }};
`;

export const Circle = styled.div`
  width: ${({ size }) => (size === 'small' ? '12px' : '20px')};
  height: ${({ size }) => (size === 'small' ? '12px' : '20px')};
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.tertiaryMain};
  border-radius: 50%;
`;

export const Square = styled.div`
  width: ${({ size }) => (size === 'small' ? '12px' : '20px')};
  height: ${({ size }) => (size === 'small' ? '12px' : '20px')};
  background: ${({ theme, shapeColor }) =>
    shapeColor
      ? theme.colors[shapeColor] || shapeColor
      : theme.colors.primaryMain};
`;
