import TextSection from '.';
import { Row, Col } from '../Grid';

export default {
  title: 'Common Components/TextSection',
  component: TextSection,
};

const Template = (args) => (
  <Row>
    <Col w={[4, 4, 4]} mt="5">
      <TextSection {...args} />
    </Col>
  </Row>
);

export const Default = Template.bind({});
Default.args = {
  date: 'August 17, 2021',
  title: 'Arequipa general strike against forced labour',
  content:
    'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
  id: '1',
};
