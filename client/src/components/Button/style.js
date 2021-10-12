import styled from '@emotion/styled';
import { Spin } from 'antd';
import theme from '../../theme';
import * as T from '../Typography';
import setMargin from './../../helpers/set-margin';

export const Button = styled.button`
  ${setMargin};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: ${({ w }) => w || '100%'};
  height: 195px;
  border: none;
  font-size: 70px;
  font-weight: 600;
  line-height: 84px;
  color: ${({ textColor }) =>
    textColor ? theme.colors[textColor] || textColor : theme.colors.white};
  position: relative;
  background: ${({ bgColor }) =>
    bgColor ? theme.colors[bgColor] || bgColor : theme.colors.primaryMain};
  padding: ${({ theme }) => `14px ${theme.spacings[6]}`};

  ${({ theme }) => theme.media.tablet} {
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
    padding: ${({ theme }) => `14px ${theme.spacings[5]}`};
    height: 150px;
    justify-content: center;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: 30px;
    font-weight: 600;
    line-height: 34px;
    padding: ${({ theme }) => `14px ${theme.spacings[3]}`};
    height: 100px;
    justify-content: center;
  }

  /* clicking style */
  :active {
    opacity: 0.9;
    transform: translateY(1px) scale(0.99);
  }

  /* for disabled style */
  opacity: ${({ disabled, isLoading }) => (disabled || isLoading ? 0.5 : 1)};
  cursor: ${({ disabled, isLoading }) =>
    disabled || isLoading ? 'not-allowed' : 'pointer'};
`;

export const Loading = styled(Spin)`
  span {
    line-height: 24px;
    margin-left: 10px;
    color: ${theme.colors.white};
  }
`;

export const Label = styled(T.P)``;
