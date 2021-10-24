import ReactQuill from 'react-quill';
import setMargin from '../../helpers/set-margin';

import styled from '@emotion/styled';
import theme from '../../theme';

export const Quill = styled(ReactQuill)`
  width: 100%;
  .ql-toolbar {
    border: ${theme.borders.inputs};
    border-bottom: none;
    background-color: ${theme.colors.gray};
    border-color: ${({ error }) =>
      error ? theme.colors.error : theme.colors.neutral};
  }
  .ql-container {
    border: ${theme.borders.inputs};
    background-color: ${theme.colors.grayLight};
    border-top: none;
    min-height: 700px;
    font-size: 20px;
    border-color: ${({ error }) =>
      error ? theme.colors.error : theme.colors.neutral};
  }

  *:focus-visible {
    outline: none;
  }
`;

export const Label = styled.label`
  ${setMargin};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
