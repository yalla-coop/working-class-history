import { Typography as T, Grid, Tags, Button } from '../../components';
import ContributeForm from './ContributeForm';

const { Col, Row } = Grid;
const { Reason } = Tags;

const ContributePage = () => {
  return (
    <>
      <T.H1>Want to contribute?</T.H1>
      <Row>
        <Col w={[4, 12, 12]} mt="8">
          <T.P>
            This is a crowd-sourced project and we’re always looking for people
            to help. We are looking for:
          </T.P>
        </Col>
      </Row>
      <Reason
        mt="8"
        title="Reason 1: "
        text=" lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />

      <Reason
        mt="8"
        shape="triangle"
        shapeColor="neutral"
        title="Reason 2: "
        text=" lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />

      <Reason
        mt="8"
        shape="circle"
        shapeColor="tertiaryMain"
        title="Reason 1: "
        text=" lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      <Row mt="10">
        <Col w={[4, 8, 8]}>
          <Button text="Submit an event" textColor="neutral" />
        </Col>
      </Row>
      <ContributeForm />
    </>
  );
};

export default ContributePage;
