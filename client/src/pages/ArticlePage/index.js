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

import {
  rejectArticle,
  approveArticle,
  getArticleById,
} from '../../api-calls/Article';
import * as Tag from '../../api-calls/Tag';

import SocialSection from './SocialSection';
import { useHistory, useParams } from 'react-router';
import { ADMIN, GENERAL } from '../../constants/nav-routes';

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
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState('');
  const { id } = useParams();
  const history = useHistory();

  // change this when connecting to the backend
  const hasAccess = true;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { error, data } = await getArticleById({ id });
        setData(data);
        setLoading(false);
        if (error) {
        }
      } catch (error) {
        setPageError(error.message);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
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
    if (data.created_at) {
      getAllTags();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.created_at]);

  const onReject = () => {
    setLoading(true);
    try {
      const { data, error } = rejectArticle({ id });
      if (error) {
        setPageError(error.message);
      } else {
        // eslint-disable-next-line no-console
        console.log({ data });
        history.push(ADMIN.REJECTED);
      }
    } catch (error) {
      setPageError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onApprove = () => {
    setLoading(true);
    try {
      const { data, error } = approveArticle({ id });
      if (error) {
        setPageError(error.message);
      } else {
        // eslint-disable-next-line no-console
        console.log({ data });
        history.push(ADMIN.APPROVED);
      }
    } catch (error) {
      setPageError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                relatedTags={
                  tags.length ? filterTags(data.tags, tags, 'person') : []
                }
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="square"
                shapeColor="primaryMain"
                size="small"
                title="City/Area"
                to={GENERAL.CATEGORY.replace(':categoryName', 'area')}
                relatedTags={
                  tags.length ? filterTags(data.tags, tags, 'city_area') : []
                }
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="circle"
                shapeColor="tertiaryMain"
                size="small"
                title="Topic"
                to={GENERAL.CATEGORY.replace(':categoryName', 'topic')}
                relatedTags={
                  tags.length ? filterTags(data.tags, tags, 'topic') : []
                }
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="circle"
                shapeColor="tertiaryMain"
                size="small"
                title="Country"
                to={GENERAL.CATEGORY.replace(':categoryName', 'country')}
                relatedTags={
                  tags.length ? filterTags(data.tags, tags, 'country') : []
                }
              />
            </Col>
            <Col w={[4, 12, 6]} mt="6">
              <Category
                shape="triangle"
                size="small"
                shapeColor="neutral"
                title="Organisation"
                to={GENERAL.CATEGORY.replace(':categoryName', 'organisation')}
                relatedTags={
                  tags.length ? filterTags(data.tags, tags, 'organisation') : []
                }
              />
            </Col>
          </Row>
          {pageError && (
            <T.P color="error" mt="5" mb="3">
              {pageError}
            </T.P>
          )}
          {!hasAccess && (
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
          )}
          {hasAccess && (
            <Row>
              <Col w={[4, 4, 4]} mt="11" mtM="7">
                <Button
                  handleClick={onReject}
                  text="Reject"
                  textColor="neutral"
                  loading={loading}
                />
              </Col>
              <Col w={[4, 4, 4]} mt="11" mtM="7">
                <Button
                  bgColor="neutral"
                  to={ADMIN.EDIT_ARTICLE.replace(':articleId', data?.id)}
                  textColor="white"
                  text="Edit"
                  loading={loading}
                />
              </Col>
              <Col w={[4, 4, 4]} mt="11" mtM="7">
                <Button
                  handleClick={onApprove}
                  bgColor="tertiaryMain"
                  textColor="white"
                  text="Approve"
                  loading={loading}
                />
              </Col>
            </Row>
          )}
        </>
      )}

      <TimelineGraphic type="short" number={data?.year} />
    </>
  );
};

export default ArticlePage;
