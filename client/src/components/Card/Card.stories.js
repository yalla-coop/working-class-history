import Card from '.';
import { Row, Col } from '../Grid';
import * as T from '../Typography';

export default {
  title: 'Common Components/Card',
  component: Card,
};

const PrimaryTemplate = (args) => (
  <Row>
    <Col w={[4, 4, 4]}>
      <Card {...args}>
        <T.H4>What is Working Class History | Stories?</T.H4>
        <T.P weight="light" mt="3">
          History isn't made by kings and politicians, it is made by us:
          billions of ordinary people. This is the Working Class History archive
          of historical stories of our collective struggles to build a better
          world. You can browse all of our stories by category through the{' '}
          <T.Link underline weight="semi">
            index
          </T.Link>
          , or some of them geographically through the{' '}
          <T.Link underline weight="semi">
            map
          </T.Link>
        </T.P>
      </Card>
    </Col>
  </Row>
);

export const PrimaryCard = PrimaryTemplate.bind({});
PrimaryCard.args = { bgColor: 'primaryMain' };

const SecondaryTemplate = (args) => (
  <Row>
    <Col w={[4, 4, 4]}>
      <Card {...args}>
        <T.H4 color="white">Description of the tag here</T.H4>
        <T.P color="white" weight="light" mt="3">
          In December 1925, a three-day general strike broke out in Arequipa,
          Peru, against "Conscripción Vial": forced conscription to road
          building for anyone who could not afford to pay a fee to get out of
          it...
        </T.P>
      </Card>
    </Col>
  </Row>
);

export const SecondaryCard = SecondaryTemplate.bind({});
SecondaryCard.args = { bgColor: 'tertiaryMain' };
