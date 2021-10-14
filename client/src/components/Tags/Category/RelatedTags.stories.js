import Category from '.';
import { Row, Col } from '../../Grid';

export default {
  title: 'Common Components/Tags/RelatedTags',
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
  relatedTags: [
    { title: 'Tag1', to: '/tag1' },
    { title: 'Tag2', to: '/tag2' },
    { title: 'Tag3', to: '/tag3' },
    { title: 'Tag4', to: '/tag4' },
    { title: 'Tag5', to: '/tag5' },
    { title: 'Tag6', to: '/tag6' },
    { title: 'Tag7', to: '/tag7' },
    { title: 'Tag8', to: '/tag8' },
    { title: 'Tag9', to: '/tag9' },
    { title: 'Tag10', to: '/tag10' },
    { title: 'Tag11', to: '/tag11' },
  ],
};

export const Topics = Template.bind({});
Topics.args = {
  shape: 'square', // optional
  shapeColor: 'primaryMain',
  title: 'Topics',
  to: '/topics',
  relatedTags: [
    { title: 'Tag1', to: '/tag1' },
    { title: 'Tag2', to: '/tag2' },
    { title: 'Tag3', to: '/tag3' },
    { title: 'Tag4', to: '/tag4' },
    { title: 'Tag5', to: '/tag5' },
    { title: 'Tag6', to: '/tag6' },
    { title: 'Tag7', to: '/tag7' },
    { title: 'Tag8', to: '/tag8' },
    { title: 'Tag9', to: '/tag9' },
    { title: 'Tag10', to: '/tag10' },
    { title: 'Tag11', to: '/tag11' },
  ],
};

export const Organisations = Template.bind({});
Organisations.args = {
  shape: 'triangle',
  shapeColor: 'neutral',
  title: 'Organisations',
  to: '/organisations',
  relatedTags: [
    { title: 'Tag1', to: '/tag1' },
    { title: 'Tag2', to: '/tag2' },
    { title: 'Tag3', to: '/tag3' },
    { title: 'Tag4', to: '/tag4' },
    { title: 'Tag5', to: '/tag5' },
    { title: 'Tag6', to: '/tag6' },
    { title: 'Tag7', to: '/tag7' },
    { title: 'Tag8', to: '/tag8' },
    { title: 'Tag9', to: '/tag9' },
    { title: 'Tag10', to: '/tag10' },
    { title: 'Tag11', to: '/tag11' },
  ],
};
