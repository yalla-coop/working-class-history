import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';

const InputCommonStyle = ({ theme, error, disabled }) => `
border: ${theme.borders.inputs};
border-color: ${error ? theme.colors.error : theme.colors.secondaryMid};
border-radius: ${theme.borders.radius};

width: 100%;
padding: 40px 26px;
line-height: 24px;

color: ${theme.colors.neutral};
font-size: 20px;

cursor: ${disabled && 'not-allowed'};
background: ${theme.colors.tertiaryLight};

:focus {
  outline: none;
  border-color: ${theme.colors.tertiaryMain};
}
`;

export const Input = styled.input`
  ${setMargin};
  ${CS.placeholderStyle};
  ${InputCommonStyle};
`;
