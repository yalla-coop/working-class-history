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
import { Skeleton } from 'antd';

import * as Article from '../../api-calls/Article';
import * as Tag from '../../api-calls/Tag';

import SocialSection from './SocialSection';
import { useParams } from 'react-router';
import { GENERAL } from '../../constants/nav-routes';

const { Col, Row } = Grid;
const { ArticleTag, Category } = Tags;

const filterTags = (relatedTags, allTags, category) => {
  if (relatedTags?.length && allTags?.length) {
    const _relatedTags = relatedTags?.map((item) => item.id) || [];
    return allTags.filter(
      (item) =>
        _relatedTags.includes(item.id) && category === item.Category.value
    );
  }
  return [];
};

const ArticlePage = () => {
  const [data, setData] = useState({});
  const [tags, setTags] = useState([]);
  const [pageError, setPageError] = useState('');
  const [loading, setLoading] = useState(false);

  const { articleName, id } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const { error, data } = await Article.getArticleById({ id });
      setData(data);
      setLoading(false);
      if (error) {
      }
    } catch (error) {
      setPageError(error.message);
    }
  };

  const getAllTags = async () => {
    try {
      setLoading(true);
      const { error, data } = await Tag.getTags();
      setTags(data.results);
      setLoading(false);
      if (error) {
      }
    } catch (error) {
      setPageError(error.message);
    }
  };

  useEffect(() => {
    getData();
    getAllTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <T.H2>{data?.title || articleName}</T.H2>
      {pageError && (
        <T.P color="error" mt="8">
          {pageError}
        </T.P>
      )}
      {loading ? (
        <Skeleton key="skeleton" loading={loading} active></Skeleton>
      ) : (
        <>
          <ArticleTag
            shape="square"
            shapeColor="primaryMain"
            label="Date"
            value={data?.created_at}
            mt="30px"
          />
          <S.ArticleContent>
            <SocialSection url={window.location.href} />

            <Image src={data?.media} mt="36px" mtT="2" />
            <T.P mt="5" mb="2">
              {data?.media_caption}
            </T.P>

            <Row mt="9">
              <Col w={[4, 10, 10]}>
                <T.P>{data?.description}</T.P>
              </Col>
            </Row>
          </S.ArticleContent>
          <S.MapSection mt="11" mb="3">
            <Image image="map" width="100%" />
          </S.MapSection>
          <MoreInformation
            mt="9"
            mb="2"
            subtitle="CLR James, A History of Pan African Revolt,"
            link="https://shop.workingclasshistory.com/products/a-history-of-pan-african-revolt-c-l-r-james"
          />
          {data?.sources && (
            <MoreInformation
              mt="9"
              mb="8"
              title="Sources"
              subtitle={data.sources
                .split(' ')
                .filter((str) => !str.startsWith('http'))}
              link={data.sources
                .split(' ')
                .find((str) => str.startsWith('http'))}
            />
          )}
          <ArticleTag
            shape="triangle"
            shapeColor="primaryMain"
            label="Author"
            value={data?.author_name || 'N/A'}
            mt="5"
          />
          <ArticleTag
            shape="circle"
            shapeColor="primaryMain"
            label="Fact checker"
            value={data?.reviwer_id?.value || 'N/A'}
            mt="5"
          />
          <ArticleTag
            shapeColor="primaryMain"
            label="Last edited"
            value={data?.created_at || 'N/A'}
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
                to={GENERAL.CATEGORY.replace(':categoryName', 'people')}
                relatedTags={filterTags(data.tags, tags, 'person')}
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="square"
                shapeColor="primaryMain"
                size="small"
                title="City/Area"
                to={GENERAL.CATEGORY.replace(':categoryName', 'area')}
                relatedTags={filterTags(data.tags, tags, 'city_area')}
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="circle"
                shapeColor="tertiaryMain"
                size="small"
                title="Topic"
                to={GENERAL.CATEGORY.replace(':categoryName', 'topic')}
                relatedTags={filterTags(data.tags, tags, 'topic')}
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="circle"
                shapeColor="tertiaryMain"
                size="small"
                title="Country"
                to={GENERAL.CATEGORY.replace(':categoryName', 'country')}
                relatedTags={filterTags(data.tags, tags, 'country')}
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="triangle"
                size="small"
                shapeColor="neutral"
                title="Organisation"
                to={GENERAL.CATEGORY.replace(':categoryName', 'organisation')}
                relatedTags={filterTags(data.tags, tags, 'organisation')}
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
        </>
      )}
      <TimelineGraphic type="short" number={data?.year} />
    </>
  );
};

export default ArticlePage;
