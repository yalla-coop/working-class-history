import styled from '@emotion/styled';
import { Input } from 'antd';

import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';

const { TextArea: AntdTextArea } = Input;

export const TextArea = styled(AntdTextArea)`
  ${setMargin};
  ${CS.placeholderStyle};
  border: ${({ theme }) => theme.borders.inputs};
  border-color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.secondaryMid};
  border-radius: ${({ theme }) => theme.borders.radius};
  width: 100%;
  padding: 40px 26px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 20px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  background: ${({ theme }) => theme.colors.tertiaryLight};

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.tertiaryMain};
  }
`;
