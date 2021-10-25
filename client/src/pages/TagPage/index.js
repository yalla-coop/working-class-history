import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Typography as T,
  Grid,
  TextSection,
  Card,
  ArticlesSection,
} from '../../components';
import * as S from './style';
import { Skeleton } from 'antd';

import { getTagById, getAllArticles } from '../../api-calls/content';

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
  const [tagData, setTagData] = useState({});
  const [articles, setArticles] = useState({});

  const [showItems, setShowItems] = useState(10);
  const [pageError, setPageError] = useState('');
  const [loading, setLoading] = useState(true);

  const { tagName, tagId } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const { error, data } = await getTagById({ id: tagId });
      setTagData(data);
      setLoading(false);
      if (error) {
        setPageError(error.message);
      }
    } catch (error) {
      setPageError(error.message);
    }
  };

  const getArticlesData = async () => {
    try {
      setLoading(true);
      const { error, data } = await getAllArticles({});
      const filteredArticles = data.results.filter((art) =>
        art.articles_to_tags.find((t) => t.id === Number(tagId))
      );
      setArticles(filteredArticles);
      setLoading(false);
      if (error) {
      }
    } catch (error) {
      setPageError(error.message);
    }
  };

  useEffect(() => {
    getData();
    getArticlesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <T.H1>{tagData.Title || tagName}</T.H1>
      {pageError && (
        <T.P color="error" mt="8">
          {pageError}
        </T.P>
      )}
      <Row>
        <Col w={[4, 6, 6]} mt="8">
          <Card bgColor="tertiaryMain">
            <T.H4 color="white">
              {tagData.subtitle || 'Description of the tag here'}
            </T.H4>
            <T.P color="white" weight="light" mt="3">
              {tagData.description ||
                'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it...'}
            </T.P>
          </Card>
        </Col>
        <Skeleton key="skeleton" loading={loading} active></Skeleton>

        {articles && articles.length && !loading ? (
          articles.slice(0, 5).map((item, i) => (
            <Col w={[4, 6, 6]} mt="8" jc={i % 2 ? 'flex-start' : 'flex-end'}>
              <TextSection key={item.id} {...item} />
            </Col>
          ))
        ) : (
          <Skeleton key="skeleton" loading={loading} active></Skeleton>
        )}
      </Row>
      {articles && articles.length && (
        <Articles articles={articles.slice(5, showItems)} />
      )}
      {articles && articles.length && articles.length > showItems && (
        <S.LoadMore onClick={() => setShowItems((old) => old + 6)}>
          <T.P underline>Load more...</T.P>
        </S.LoadMore>
      )}
    </>
  );
};

export default TagPage;
