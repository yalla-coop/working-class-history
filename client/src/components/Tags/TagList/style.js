import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${setMargin};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const TagLink = styled(Link)``;

export const Edge = styled.span`
  height: 20px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.secondaryMid};
  margin: ${({ theme }) => `0 ${theme.spacings[5]}`};
`;
