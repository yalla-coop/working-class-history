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

import * as Tag from '../../api-calls/Tag';
import * as Article from '../../api-calls/Article';

const { Col, Row } = Grid;

const Articles = ({ articles }) => {
  const artLength = Math.ceil(articles.length / 6);
  const artSections = [];
  for (let i = 0; i < artLength; i++) {
    let items = articles.slice(i * 6, i * 6 + 6);
    artSections.push(items);
  }

  return artSections.map(
    (item) => !!item.length && <ArticlesSection key={item.id} articles={item} />
  );
};

const TagPage = () => {
  const [tagData, setTagData] = useState({});
  const [articles, setArticles] = useState([]);
  const [nextData, setNextData] = useState('');
  const [showItems, setShowItems] = useState(10);
  const [pageError, setPageError] = useState('');
  const [loading, setLoading] = useState(true);

  const { tagName, tagId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { error, data } = await Tag.getTagById({ id: tagId });

        setTagData(data);
        setLoading(false);
        if (error) {
          setPageError(error.message);
        }
      } catch (error) {
        setPageError(error.message);
      }
    };
    getData();
  }, [tagId]);

  useEffect(() => {
    const getArticlesData = async () => {
      try {
        setLoading(true);
        const { error, data } = await Article.getAllArticlesByTag({
          tagId: tagData.id,
        });
        setArticles(data.results);
        setNextData(data.next);
        setLoading(false);
        if (error) {
          setPageError(error.message);
        }
      } catch (error) {
        setPageError(error.message);
        setLoading(false);
      }
    };

    if (tagData.id) {
      getArticlesData();
    }
  }, [tagData.articles, tagData.id]);

  const handleMore = async () => {
    setShowItems(showItems + 10);
    if (showItems % 90 && nextData) {
      try {
        setLoading(true);
        const { error, data } = await Article.getNextArticles({
          nextUrl: nextData,
        });
        setArticles([...articles, ...data.results]);
        setNextData(data.next);
        setLoading(false);
        if (error) {
          setPageError(error.message);
        }
      } catch (error) {
        setPageError(error.message);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <T.H1>{tagData.Title || tagName}</T.H1>
      <Row>
        <Col w={[4, 12, 12]}>
          {pageError && (
            <T.P color="error" mt="8">
              {pageError}
            </T.P>
          )}
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 6]} mt="8">
          <Card bgColor="tertiaryMain" style={{ width: '100%' }}>
            {tagData.subtitle ? (
              <>
                <T.H4 color="white">{tagData.subtitle}</T.H4>
                <T.P color="white" weight="light" mt="3">
                  {tagData.description}
                </T.P>
              </>
            ) : (
              <Skeleton key="subtitle" loading={loading} active></Skeleton>
            )}
          </Card>
        </Col>
        <Skeleton key="skeleton" loading={loading} active></Skeleton>

        {articles?.length && !loading ? (
          articles.slice(0, 5).map((item, i) => (
            <Col
              key={item.id}
              w={[4, 6, 6]}
              mt="8"
              jc={i % 2 ? 'flex-start' : 'flex-end'}
            >
              <TextSection {...item} />
            </Col>
          ))
        ) : (
          <Skeleton key="skeleton" loading={loading} active></Skeleton>
        )}
      </Row>
      {articles?.length ? (
        <Articles articles={articles.slice(5, showItems)} />
      ) : (
        <Row mt="8" mtM="5">
          <Col w={[4, 12, 12]}>
            <T.H4>more articles will come soon!</T.H4>
          </Col>
        </Row>
      )}
      {(articles.length > showItems || nextData) && (
        <S.LoadMore onClick={() => handleMore()}>
          <T.P underline>Load more...</T.P>
        </S.LoadMore>
      )}
    </>
  );
};

export default TagPage;
