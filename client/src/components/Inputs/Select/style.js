import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';

import { Select as AntSelect } from 'antd';

const { Option: AntOption } = AntSelect;

const InputCommonStyle = ({ theme, error, disabled }) => `
border: ${theme.borders.inputs};
border-color: ${error ? theme.colors.error : theme.colors.secondaryMid};
border-radius: ${theme.borders.radius};
height: 110px;
width: 100%;
line-height: 24px;

color: ${theme.colors.neutral};
font-size: 20px;

cursor: ${disabled && 'not-allowed'};
background: ${theme.colors.tertiaryLight};

:focus {
  outline: none;
  border-color: ${theme.colors.tertiaryMain};
}

* {
  border: none !important;
  font-size: 20px !important;
}

.ant-select-selector {
  height: 100% !important;
  padding-left: 26px !important;
}

.ant-select-arrow {
  right: 30px !important;
  color: ${theme.colors.neutral};
}

.ant-select-clear {
  right: 30px !important;
  color: ${theme.colors.neutral};
}

.ant-select-selection-item {
  color: ${theme.colors.neutral};
  display: flex;
  align-items: center;
  font-family: 'Zilla Slab', serif !important;
}
`;

export const Select = styled(AntSelect)`
  ${setMargin};
  ${CS.placeholderStyle};
  ${InputCommonStyle};
  cursor: pointer;
  position: relative;

  select {
    display: none;
  }
`;

export const Option = styled(AntOption)``;
