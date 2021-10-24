import styled from '@emotion/styled';
import AntDatePicker from './DatePicker';

export const DatePicker = styled(AntDatePicker)`
  width: 100%;
  padding: 40px 26px;
  font-size: 30px;
  border: ${({ theme }) => theme.borders.inputs};
  input {
    font-size: 20px !important;
  }
  &:hover {
    border: ${({ theme }) => theme.borders.inputs};
    border-right-width: 3px;
  }
`;
