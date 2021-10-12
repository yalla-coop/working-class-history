import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import setMargin from '../../helpers/set-margin';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const weights = {
  bold: '700 !important',
  semi: '600 !important',
  medium: '500 !important',
  regular: '400 !important',
  light: '300 !important',
};

const bodyTextSizes = {
  extraLarge: '120px !important',
  large: '28px !important',
  medLarge: '24px !important',
  med: '20px !important',
  regular: '16px !important',
  small: '14px !important',
};

const bodyLineHeight = {
  extraLarge: '120% !important',
  large: '120% !important',
  medLarge: '120% !important',
  med: '120% !important',
  regular: '210% !important',
  small: '150% !important',
};

const commonStyle = ({ theme, color, caps, ta }) => `
  font-style: normal !important;
  letter-spacing: 0.2px !important;
  color: ${theme.colors[color] || color || theme.colors.neutral} !important;
  text-transform: ${caps ? 'uppercase' : 'initial'} !important;
  text-align: ${ta || 'left'} !important;
`;

export const H0 = styled((props) => <Paragraph {...props} />)`
  ${setMargin};
  ${commonStyle};
  font-size: ${bodyTextSizes['extraLarge']};
  line-height: ${bodyLineHeight['extraLarge']};
  font-weight: ${({ weight }) => (weight ? weights[weight] : weights['bold'])};
  font-family: 'Zilla Slab', serif;

  pre {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const Head1 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: 'Zilla Slab', serif;
  font-size: 70px !important;
  line-height: 84px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '700 !important')};
`;
export const H1 = (props) => <Head1 {...props} level={1} />;

const Head2 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: 'Zilla Slab', serif;
  font-size: 40px !important;
  line-height: 48px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '600 !important')};
`;
export const H2 = (props) => <Head2 {...props} level={2} />;

const Head3 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: 'Zilla Slab', serif;
  font-size: 30px !important;
  line-height: 36px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '600 !important')};
  text-decoration: ${({ td }) => td || 'none'};
`;
export const H3 = (props) => <Head3 {...props} level={3} />;

const Head4 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: 'Zilla Slab', serif;
  font-size: 20px !important;
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '600 !important')};
  text-decoration: ${({ td }) => td || 'none'};
`;
export const H4 = (props) => <Head4 {...props} level={4} />;

export const P = styled((props) => <Paragraph {...props} />)`
  ${setMargin};
  ${commonStyle};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ size }) => (size ? bodyTextSizes[size] : '16px !important')};
  line-height: ${({ size }) =>
    size ? bodyLineHeight[size] : '210% !important'};
  font-weight: ${({ weight }) => (weight ? weights[weight] : '300 !important')};
  pre {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const AntdLink = ({ to, external = false, underline, ...props }) => {
  return external ? (
    <Typography.Link target="_blank" href={to} {...props} />
  ) : (
    <RouterLink to={to} {...props}>
      {props.children}
    </RouterLink>
  );
};
export const Link = styled(AntdLink)`
  ${setMargin};
  ${commonStyle};
  font-size: 16px !important;
  line-height: 210% !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '300 !important')};

  text-decoration: ${({ underline }) =>
    underline ? 'underline' : 'none'} !important;
`;
