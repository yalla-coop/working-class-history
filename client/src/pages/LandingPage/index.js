import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';

import * as S from './style';

import {
  Typography as T,
  Grid,
  TextSection,
  Image,
  Card,
  ArticlesSection,
} from '../../components';
import { GENERAL } from '../../constants/nav-routes';
import * as Article from '../../api-calls/Article';
const { Col, Row } = Grid;

const LandingPage = () => {
  const [recentData, setRecentData] = useState([]);
  const [pageError, setPageError] = useState('');
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      setLoading(true);
      const { error, data } = await Article.getRecentArticles({});
      setRecentData(data?.results || []);
      setLoading(false);
      if (error) {
      }
    } catch (error) {
      setPageError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <T.H2>Working Class History | Stories</T.H2>
      {pageError && (
        <T.P color="error" mt="8">
          {pageError}
        </T.P>
      )}
      <T.H3 mt="9">Latest</T.H3>
      <Row jc="space-between">
        <Col w={[4, 5, 5]}>
          {loading
            ? Array.from([{ id: 1 }, { id: 2 }, { id: 3 }]).map((item) => (
                <Skeleton key={item.id} loading={loading} active></Skeleton>
              ))
            : recentData
                .slice(0, 3)
                .map((item) => (
                  <TextSection key={item.id} {...item} mt="9" mtM="8" />
                ))}
        </Col>
        <Col w={[4, 6, 6]} mt="6" mtM="9">
          <Image image="latest" />
          <Card mt="5">
            <T.H4>What is Working Class History | Stories?</T.H4>
            <T.P weight="light" mt="3">
              History isn't made by kings and politicians, it is made by us:
              billions of ordinary people. This is the Working Class History
              archive of historical stories of our collective struggles to build
              a better world. You can browse all of our stories by category
              through the{' '}
              <T.Link underline to={GENERAL.INDEX}>
                index
              </T.Link>
              , or some of them geographically through the{' '}
              <S.HashRoute underline to={`${GENERAL.LandingPage}#map`}>
                map
              </S.HashRoute>
            </T.P>
          </Card>
        </Col>
      </Row>
      <S.MapSection mt="11" id="map">
        <S.MapWrapper>
          <iframe
            title="map"
            src="https://arcg.is/4iiuu"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ width: '100%' }}
            allowFullScreen
          ></iframe>
        </S.MapWrapper>
      </S.MapSection>
      {loading ? (
        Array.from([{ id: 1 }, { id: 2 }, { id: 3 }]).map((item) => (
          <Skeleton key={item.id} loading={loading} active></Skeleton>
        ))
      ) : (
        <ArticlesSection articles={recentData.slice(3, 8)} />
      )}
      <Row jc="space-between">
        <Col w={[4, 6, 6]} mt="6" mtM="8">
          <Image image="haitianRevolution" />
        </Col>
        <Col w={[4, 5, 5]}>
          {loading
            ? Array.from([{ id: 1 }, { id: 2 }, { id: 3 }]).map((item) => (
                <Skeleton key={item.id} loading={loading} active></Skeleton>
              ))
            : recentData
                .slice(8)
                .map((item) => (
                  <TextSection key={item.id} {...item} mt="9" mtM="8" />
                ))}
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;
