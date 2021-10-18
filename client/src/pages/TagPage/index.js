import {
  Typography as T,
  Grid,
  TextSection,
  Card,
  ArticlesSection,
} from '../../components';
import { latestDummyData, articles } from './dummy-data';
import { useParams } from 'react-router-dom';

const { Col, Row } = Grid;

const TagPage = () => {
  const { tagName } = useParams();
  return (
    <>
      <T.H1>{tagName}</T.H1>
      <Row>
        <Col w={[4, 6, 6]} mt="8">
          <Card bgColor="tertiaryMain">
            <T.H4 color="white">Description of the tag here</T.H4>
            <T.P color="white" weight="light" mt="3">
              In December 1925, a three-day general strike broke out in
              Arequipa, Peru, against "Conscripción Vial": forced conscription
              to road building for anyone who could not afford to pay a fee to
              get out of it...
            </T.P>
          </Card>
        </Col>
        {latestDummyData.map((item, i) => (
          <Col w={[4, 6, 6]} mt="8" jc={i % 2 ? 'flex-start' : 'flex-end'}>
            <TextSection key={item.id} {...item} />
          </Col>
        ))}
      </Row>
      <ArticlesSection articles={articles} />
    </>
  );
};

export default TagPage;
