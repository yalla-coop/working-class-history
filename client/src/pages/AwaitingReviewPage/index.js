import { useEffect, useState } from 'react';

import { ADMIN } from '../../constants/nav-routes';
import { Typography as T, Grid, TextSection } from '../../components';
import * as Article from '../../api-calls/Article';
import { Skeleton } from 'antd';

const { Col, Row } = Grid;

const AwaitingReviewPage = () => {
  const [articles, setArticles] = useState([]);
  const [pageError, setPageError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPenningArticlesData = async () => {
      try {
        setLoading(true);
        const { error, data } = await Article.getPendingArticles({});
        setArticles(data.results);
        setLoading(false);
        if (error) {
          setPageError(error.message);
        }
      } catch (error) {
        setPageError(error.message);
      }
    };
    getPenningArticlesData();
  }, []);
  return (
    <>
      <T.H1>Awaiting review</T.H1>
      <T.H3 mt="9">Ordered by oldest date</T.H3>
      {pageError && (
        <Row mt="9" mtM="6">
          <Col w={[4, 12, 12]}>
            <T.P color="error" mt="5" mb="3">
              {pageError}
            </T.P>
          </Col>
        </Row>
      )}
      {loading ? (
        <Row mt="9" mtM="6">
          <Col w={[4, 12, 12]}>
            <Skeleton key="article-pending-skeleton" loading={loading} active />
          </Col>
        </Row>
      ) : (
        <Row>
          {articles?.length ? (
            articles.map((item) => (
              <Col w={[4, 6, 6]} key={item.id}>
                <TextSection
                  {...item}
                  mt="9"
                  mtM="6"
                  to={ADMIN.PENDING_ARTICLE.replace(':id', item.id)}
                />
              </Col>
            ))
          ) : (
            <T.H4 mt="9" mtM="6">
              there is no article need to review for now come back latter!
            </T.H4>
          )}
        </Row>
      )}
    </>
  );
};

export default AwaitingReviewPage;
