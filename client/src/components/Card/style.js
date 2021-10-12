import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Card = styled.button`
  ${setMargin};
  background: ${({ theme, bgColor }) =>
    bgColor ? theme.colors[bgColor] || bgColor : theme.colors.primaryMain};
  border: none;
  padding: ${({ theme }) => theme.spacings[6]};
`;
