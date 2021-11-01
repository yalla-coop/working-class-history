import { ADMIN } from '../../constants/nav-routes';
import { Typography as T, Grid, TextSection } from '../../components';
import { dummyData } from './dummy-data';

const { Col, Row } = Grid;

const AwaitingReviewPage = () => {
  return (
    <>
      <T.H1>Awaiting review</T.H1>
      <T.H3 mt="9">Ordered by oldest date</T.H3>
      <Row>
        <Col w={[4, 6, 6]}>
          {dummyData
            .sort((a, b) => a.date.localeCompare(b.date))
            .map((item) => (
              <TextSection
                {...item}
                mt="9"
                mtM="6"
                to={ADMIN.PENDING_ARTICLE.replace(':articleId', item.id)}
              />
            ))}
        </Col>
      </Row>
    </>
  );
};

export default AwaitingReviewPage;
