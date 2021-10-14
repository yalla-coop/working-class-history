import MoreInformation from '.';
import { Row, Col } from '../Grid';

export default {
  title: 'Common Components/MoreInformation',
  component: MoreInformation,
};

const Template = (args) => (
  <Row>
    <Col w={[4, 4, 4]} mt="5">
      <MoreInformation {...args} />
    </Col>
  </Row>
);

export const Default = Template.bind({});
Default.args = {
  subtitle: 'CLR James, A History of Pan African Revolt,',
  link:
    'https://shop.workingclasshistory.com/products/a-history-of-pan-african-revolt-c-l-r-james',
};
