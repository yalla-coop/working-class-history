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

const randomImage = () => {
  const images = [
    'landingPage_1',
    'landingPage_2',
    'landingPage_3',
    'landingPage_4',
    'landingPage_5',
    'haitianRevolution',
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const LandingPage = () => {
  const [recentData, setRecentData] = useState([]);
  const [pageError, setPageError] = useState('');
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');
  const [nextData, setNextData] = useState('');
  const [totalArticles, setTotalArticles] = useState(0);
  // starts at 11 as there is originally 11 articles shown on landing page
  const [showItems, setShowItems] = useState(10);

  useEffect(() => {
    setImageSrc(randomImage());
  }, []);
  const getData = async () => {
    try {
      setLoading(true);
      const { error, data } = await Article.getRecentArticles({});
      setRecentData(data?.results || []);
      setNextData(data.next);
      setTotalArticles(data?.count || 0);
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

  const handleMore = async () => {
    setShowItems(showItems + 10);
    if (showItems % 90 && nextData) {
      try {
        setLoading(true);
        const { error, data } = await Article.getNextArticles({
          nextUrl: nextData,
        });
        setRecentData([...recentData, ...data.results]);
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
          <Image image="map" width="100%" />
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
          <Image image={imageSrc} />
        </Col>
        <Col w={[4, 5, 5]}>
          {loading
            ? Array.from([{ id: 1 }, { id: 2 }, { id: 3 }]).map((item) => (
                <Skeleton key={item.id} loading={loading} active></Skeleton>
              ))
            : recentData
                .slice(8, 10)
                .map((item) => (
                  <TextSection key={item.id} {...item} mt="9" mtM="8" />
                ))}
        </Col>
      </Row>
      {showItems > 10 && (
        <Articles articles={recentData.slice(10, showItems)} />
      )}
      {showItems < totalArticles && (
        <S.LoadMore onClick={() => handleMore()}>
          <T.P mt="5" underline>
            Load more...
          </T.P>
        </S.LoadMore>
      )}
    </>
  );
};

export default LandingPage;
