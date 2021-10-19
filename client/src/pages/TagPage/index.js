import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Typography as T,
  Grid,
  TextSection,
  Card,
  ArticlesSection,
} from '../../components';
import { getTagData } from '../../api-calls/Tag';
import * as S from './style';

const { Col, Row } = Grid;

const Articles = ({ articles }) => {
  const artLength = articles.length % 6;
  const artSections = [];
  for (let i = 0; i < artLength; i++) {
    let items = articles.slice(i * 6, i * 6 + 6);
    artSections.push(items);
  }
  return artSections.map(
    (item) => !!item.length && <ArticlesSection articles={item} />
  );
};

const TagPage = () => {
  const [data, setData] = useState({});
  const [showItems, setShowItems] = useState(10);
  useEffect(() => {
    const tagData = getTagData();
    setData(tagData);
  }, []);

  const { tagName } = useParams();
  return (
    <>
      <T.H1>{tagName}</T.H1>
      <Row>
        <Col w={[4, 6, 6]} mt="8">
          <Card bgColor="tertiaryMain">
            <T.H4 color="white">{data.subtitle}</T.H4>
            <T.P color="white" weight="light" mt="3">
              {data.description}
            </T.P>
          </Card>
        </Col>
        {data.articles &&
          data.articles.slice(0, 5).map((item, i) => (
            <Col w={[4, 6, 6]} mt="8" jc={i % 2 ? 'flex-start' : 'flex-end'}>
              <TextSection key={item.id} {...item} />
            </Col>
          ))}
      </Row>
      {data.articles && (
        <Articles articles={data.articles.slice(5, showItems)} />
      )}
      {data.articles && data.articles.length > showItems && (
        <S.LoadMore onClick={() => setShowItems((old) => old + 6)}>
          <T.P underline>Load more...</T.P>
        </S.LoadMore>
      )}
    </>
  );
};

export default TagPage;
