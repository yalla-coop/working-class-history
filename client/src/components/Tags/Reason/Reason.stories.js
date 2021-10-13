import Reason from '.';
import { Row, Col } from '../../Grid';

export default {
  title: 'Common Components/Tags/Reason',
  component: Reason,
};

const Template = (args) => (
  <Row>
    <Col w={[4, 4, 4]}>
      <Reason {...args} />
    </Col>
  </Row>
);

export const Circle = Template.bind({});
Circle.args = {
  mt: '5',
  shape: 'circle',
  shapeColor: 'tertiaryMain',
  title: 'Reason 3: ',
  text:
    ' lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
};

export const Square = Template.bind({});
Square.args = {
  mt: '5',
  shape: 'square', // optional
  shapeColor: 'primaryMain',
  title: 'Reason 2: ',
  text:
    ' lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
};

export const Triangle = Template.bind({});
Triangle.args = {
  mt: '5',
  shape: 'triangle',
  shapeColor: 'neutral',
  title: 'Reason 1: ',
  text:
    ' lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
};
