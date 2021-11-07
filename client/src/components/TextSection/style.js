import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${setMargin};
  max-width: 423px;
`;

export const Div = styled.div`
  max-height: 245px;
  overflow: hidden;
  width: 100%;
`;

export const ReadMore = styled(Link)``;
