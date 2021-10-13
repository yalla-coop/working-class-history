import ArticleTag from '.';
import { Row, Col } from '../Grid';

export default {
  title: 'Common Components/ArticleTag',
  component: ArticleTag,
};

const Template = (args) => (
  <Row>
    <Col w={[4, 4, 4]}>
      <ArticleTag {...args} />
    </Col>
  </Row>
);

export const Author = Template.bind({});
Author.args = {
  shape: 'square', // optional
  shapeColor: 'primaryMain',
  label: 'Author',
  value: 'Working Class History',
};

export const FactChecker = Template.bind({});
FactChecker.args = {
  shape: 'circle',
  shapeColor: 'primaryMain',
  label: 'Fact checker',
  value: 'Working Class History',
};

export const LastEdited = Template.bind({});
LastEdited.args = {
  shape: 'triangle',
  shapeColor: 'primaryMain',
  label: 'Last Edited',
  value: 'Working Class History',
};
