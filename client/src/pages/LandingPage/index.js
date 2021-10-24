import { useEffect, useState } from 'react';

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
import { getRecentArticles } from '../../api-calls/content';
const { Col, Row } = Grid;

const LandingPage = () => {
  const [recentData, setRecentData] = useState([]);
  const getData = async () => {
    try {
      const { data } = await getRecentArticles({});
      setRecentData(data.results);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <T.H2>Working Class History | Stories</T.H2>
      <T.H3 mt="9">Latest</T.H3>
      <Row jc="space-between">
        <Col w={[4, 5, 5]}>
          {recentData.slice(0, 3).map((item) => (
            <TextSection {...item} mt="9" mtM="8" />
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
      <ArticlesSection articles={recentData.slice(3, 8)} />
      <Row jc="space-between">
        <Col w={[4, 6, 6]} mt="6" mtM="8">
          <Image image="haitianRevolution" />
        </Col>
        <Col w={[4, 5, 5]}>
          {recentData.slice(8).map((item) => (
            <TextSection {...item} mt="9" mtM="8" />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;
