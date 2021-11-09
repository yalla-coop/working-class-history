import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import { Link } from 'react-router-dom';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

export const Wrapper = styled.div`
  ${setMargin};
  max-width: 423px;
  width: 100%;
`;

export const RichText = styled(HTMLEllipsis)`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 210%;
  font-weight: 300;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 210%;
    font-weight: 300;
    pre {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
    }
  }
`;

export const ReadMore = styled(Link)``;
