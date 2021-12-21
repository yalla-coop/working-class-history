import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Typography as T, Grid, Tags, Button } from '../../components';
import ContributeForm from './ContributeForm';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';
import { navRoutes } from '../../constants';

const { Col, Row } = Grid;
const { Reason } = Tags;

const ContributePage = () => {
  const [showForm, setShowForm] = useState(false);
  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });
  const history = useHistory();
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
        title="Reason 3: "
        text=" lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem  ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
      {!showForm && (
        <Row mt="10">
          <Col w={[4, 8, 6]}>
            <Button
              textColor="neutral"
              w={isTablet ? '100%' : '470px'}
              handleClick={() => setShowForm(true)}
            >
              {isTablet ? (
                'Submit an event'
              ) : (
                <T.H1
                  size="extraLarge"
                  weight="semi"
                  color="neutral"
                  style={{ width: 300 }}
                >
                  Submit an event
                </T.H1>
              )}
            </Button>
          </Col>
          <Col w={[4, 8, 6]} mtT="4">
            <Button
              textColor="white"
              bgColor="tertiaryMain"
              w={isTablet ? '100%' : '470px'}
              handleClick={() => history.push(navRoutes.GENERAL.SIGN_UP)}
            >
              {isTablet ? (
                'Become a reviewer'
              ) : (
                <T.H1
                  size="extraLarge"
                  weight="semi"
                  color="white"
                  style={{ width: 300 }}
                >
                  Become a reviewer
                </T.H1>
              )}
            </Button>
          </Col>
        </Row>
      )}
      {showForm && <ContributeForm />}
    </>
  );
};

export default ContributePage;
