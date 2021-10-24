import { useEffect, useState } from 'react';
import * as S from './style';
import {
  Typography as T,
  Grid,
  Image,
  Tags,
  MoreInformation,
  Button,
  TimelineGraphic,
} from '../../components';

import { getArticleData } from '../../api-calls/Article';

import SocialSection from './SocialSection';
import { useParams } from 'react-router';
import { GENERAL } from '../../constants/nav-routes';

const { Col, Row } = Grid;
const { ArticleTag, Category } = Tags;

const ArticlePage = () => {
  const [data, setData] = useState({});
  const { articleName } = useParams();
  useEffect(() => {
    const articleData = getArticleData();
    setData(articleData);
  }, []);
  return (
    <>
      <T.H2>{articleName}</T.H2>
      <ArticleTag
        shape="square"
        shapeColor="primaryMain"
        label="Date"
        value={data.date}
        mt="30px"
      />
      <S.ArticleContent>
        <SocialSection url={window.location.href} />

        <Image image={data.image} mt="36px" mtT="2" />
        <T.P mt="5" mb="2">
          {data.imageDescription}
        </T.P>

        <Row mt="9">
          <Col w={[4, 10, 10]}>
            <T.P>{data.articleContent}</T.P>
            <T.P mt="5">{data.articleContent1}</T.P>
          </Col>
        </Row>
      </S.ArticleContent>
      <S.MapSection mt="11" mb="3">
        <Image image="map" width="100%" />
      </S.MapSection>
      <MoreInformation
        mt="9"
        mb="2"
        subtitle={data.infoTitle}
        link={data.infoLink}
      />
      <MoreInformation
        mt="9"
        mb="8"
        title="Sources"
        subtitle={data.sourceTitle}
        link={data.sourceLink}
      />
      <ArticleTag
        shape="triangle"
        shapeColor="primaryMain"
        label="Author"
        value={data.author}
        mt="5"
      />
      <ArticleTag
        shape="circle"
        shapeColor="primaryMain"
        label="Fact checker"
        value={data.checker}
        mt="5"
      />
      <ArticleTag
        shape="Last edited"
        shapeColor="primaryMain"
        label="Date"
        value={data.lastEdited}
        mt="5"
      />
      <T.H3 mt="9">Related tags</T.H3>
      <Row>
        <Col w={[4, 12, 6]} mt="6">
          <Category
            shape="square"
            shapeColor="primaryMain"
            size="small"
            title="People"
            to="/people"
            relatedTags={data.peopleTags}
          />
        </Col>
        <Col w={[4, 12, 6]} mt="6">
          <Category
            shape="square"
            shapeColor="primaryMain"
            size="small"
            title="City/Area"
            to="/area"
            relatedTags={data.areaTags}
          />
        </Col>
        <Col w={[4, 12, 6]} mt="6">
          <Category
            shape="circle"
            shapeColor="tertiaryMain"
            size="small"
            title="Topic"
            to="/topic"
            relatedTags={data.topicTags}
          />
        </Col>
        <Col w={[4, 12, 6]} mt="6">
          <Category
            shape="circle"
            shapeColor="tertiaryMain"
            size="small"
            title="Country"
            to="/country"
            relatedTags={data.countryTags}
          />
        </Col>
        <Col w={[4, 12, 6]} mt="6">
          <Category
            shape="triangle"
            size="small"
            shapeColor="neutral"
            title="Organisation"
            to="/organisations"
            relatedTags={data.organisationTags}
          />
        </Col>
      </Row>
      <Row mt="9">
        <Col w={[4, 7, 7]}>
          <Button
            bgColor="neutral"
            textColor="primaryMain"
            text="Support us"
            to={GENERAL.CONTRIBUTE}
          />
        </Col>
      </Row>
      <TimelineGraphic type="short" number={data.year} />
    </>
  );
};

export default ArticlePage;
