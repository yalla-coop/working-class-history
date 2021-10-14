import TagList from '.';
import { Row, Col } from '../../Grid';

export default {
  title: 'Common Components/Tags/TagList',
  component: TagList,
};

const Template = (args) => (
  <Row>
    <Col w={[4, 12, 12]} mt="5">
      <TagList {...args} />
    </Col>
  </Row>
);

export const Default = Template.bind({});
Default.args = {
  tagsList: [
    { title: 'Tag example here', to: '/tag1' },
    { title: 'Long tag title here long tag title here', to: '/tag2' },
    { title: 'Short tag', to: '/tag3' },
    { title: 'Tag example here', to: '/tag4' },
  ],
};
