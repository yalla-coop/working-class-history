import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${setMargin};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const TagLink = styled(Link)`
  margin-top: ${({ theme }) => theme.spacings[4]};
  width: auto;
  margin-left: ${({ theme }) => theme.spacings[0]};
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-left: ${({ theme }) => theme.spacings[5]};
  }
`;

export const Edge = styled.span`
  height: 20px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.secondaryMid};
  margin: ${({ theme }) => `${theme.spacings[4]} ${theme.spacings[5]}`};
  margin-bottom: 0;
  display: block;
  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const LoadMore = styled.button`
  width: 100%;
  outline: none;
  border: none;
  background: none;
  margin-top: ${({ theme }) => theme.spacings[6]};
  cursor: pointer;
`;
