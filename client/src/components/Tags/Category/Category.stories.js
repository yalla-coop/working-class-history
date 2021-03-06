import Category from '.';
import { Row, Col } from '../../Grid';

export default {
  title: 'Common Components/Tags/Category',
  component: Category,
};

const Template = (args) => (
  <Row>
    <Col w={[4, 4, 4]}>
      <Category {...args} />
    </Col>
  </Row>
);

export const People = Template.bind({});
People.args = {
  shape: 'circle',
  shapeColor: 'tertiaryMain',
  title: 'People',
  to: '/people',
};

export const Topics = Template.bind({});
Topics.args = {
  shape: 'square', // optional
  shapeColor: 'primaryMain',
  title: 'Topics',
  to: '/topics',
};

export const Organisations = Template.bind({});
Organisations.args = {
  shape: 'triangle',
  shapeColor: 'neutral',
  title: 'Organisations',
  to: '/organisations',
};
