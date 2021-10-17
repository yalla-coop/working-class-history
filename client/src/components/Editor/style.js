import ReactQuill from 'react-quill';
import styled from '@emotion/styled';
import theme from '../../theme';

export const Quill = styled(ReactQuill)`
  .ql-toolbar {
    border: ${theme.borders.inputs};
    border-bottom: none;
    background-color: ${theme.colors.gray};
  }
  .ql-container {
    border: ${theme.borders.inputs};
    background-color: ${theme.colors.grayLight};
    border-top: none;
  }

  *:focus-visible {
    outline: none;
  }
`;
