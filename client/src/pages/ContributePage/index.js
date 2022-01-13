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
            Working Class History is a collaborative, crowd-sourced project and
            we are always looking for more contributions. If you would like to
            support us financially,{' '}
            <T.Link
              to="https://workingclasshistory.com/support/"
              underline
              color="secondaryMid"
            >
              see this page
            </T.Link>
            . Otherwise, here are some other ways you can contribute:
          </T.P>
        </Col>
      </Row>
      <Reason
        mt="8"
        title="If you would like to contribute stories to our archive map, "
        text=" please click the Submit an event button below and complete the relevant fields. If you are historian, a member of a local history group, or would like to contribute multiple stories, we have a simpler way for you to do this, so please send us an email to discuss: info@workingclasshistory.com."
      />

      <Reason
        mt="8"
        shape="triangle"
        shapeColor="neutral"
        title="If you would like to volunteer as a reviewer, "
        text=" to fact-check and review contributions of others, please click the Become a reviewer button below to apply."
      />

      <Reason
        mt="8"
        shape="circle"
        shapeColor="tertiaryMain"
        title="If you would like to contribute translations to the project,"
        text=" please send us an email: info@workingclasshistory.com."
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
