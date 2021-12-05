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

import { getArticleById, updateArticleStatus } from '../../api-calls/Article';
import * as Tag from '../../api-calls/Tag';

import SocialSection from './SocialSection';
import { useHistory, useParams } from 'react-router';
import { ADMIN, GENERAL } from '../../constants/nav-routes';
import { useAuth } from '../../context/auth';
import { apiData } from '../../constants/index';
import { getMonthName } from '../../helpers';

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
  const [hasAccess, setHasAccess] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { error, data } = await getArticleById({ id });
        setHasAccess(() => {
          return user?.Approved && data.status.id === apiData.STATUS.pending;
        });
        setData(data);
        setLoading(false);
        if (error) {
          setPageError(error.message);
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

  const onReject = async () => {
    setLoading(true);
    try {
      const { error } = await updateArticleStatus({
        id,
        status: apiData.STATUS.rejected,
        reviewerId: user.id,
      });
      if (error) {
        setPageError(error.message);
      } else {
        history.push(ADMIN.REJECTED);
      }
    } catch (error) {
      setPageError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onApprove = async () => {
    setLoading(true);
    try {
      const { error } = await updateArticleStatus({
        id,
        status: apiData.STATUS.approved,
        reviewerId: user.id,
      });
      if (error) {
        setPageError(error.message);
      } else {
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
        <Skeleton key="article-skeleton" loading={loading} active></Skeleton>
      ) : (
        <>
          <T.H1 mb="6" mt="9" mtT="1" color="neutral">
            {data.title || 'N/A'}
          </T.H1>
          <ArticleTag
            shape="square"
            shapeColor="primaryMain"
            label="Date"
            value={
              data.year && data.month && data.day
                ? `${data.day} ${getMonthName(data.month)} ${data.year}`
                : 'N/A'
            }
            mt="30px"
          />
          <S.ArticleContent>
            <SocialSection
              url={window.location.href}
              hasMedia={Boolean(data?.media)}
            />

            <Image src={data?.media} mt="36px" mtT="2" />
            <T.P mt="5" mb="2">
              {data?.media_caption}
            </T.P>

            <Row mt="9">
              <Col w={[4, 10, 10]}>
                <S.RichText
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
              </Col>
            </Row>
          </S.ArticleContent>
          <S.MapSection mt="11" mb="3">
            <Image image="map" width="100%" />
          </S.MapSection>

          <Row mt="9">
            <T.H3 mb="5" color="neutral">
              More information
            </T.H3>
            <Col w={[4, 10, 10]} mb="2">
              {data?.more_info ? (
                <S.RichText
                  dangerouslySetInnerHTML={{ __html: data?.more_info }}
                />
              ) : (
                <T.P>N/A</T.P>
              )}
            </Col>
          </Row>

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
            mt="5"
          >
            {data?.author_url ? (
              <T.Link to={data?.author_url} external ml="4" mlM="5">
                <T.P weight="light" underline color="neutral">
                  {data?.author_name || 'N/A'}
                </T.P>
              </T.Link>
            ) : (
              <T.P ml="4" mlM="5">
                {data?.author_name || 'N/A'}
              </T.P>
            )}
          </ArticleTag>

          <ArticleTag
            shape="circle"
            shapeColor="primaryMain"
            label="Reviewer"
            value={data?.reviwer_id?.value || 'N/A'}
            mt="5"
          />
          <ArticleTag
            shapeColor="primaryMain"
            label="Last edited"
            value={data?.created_at || 'N/A'}
            mt="5"
          />
          {data?.tags?.length > 0 && tags?.length > 0 && (
            <>
              <T.H3 mt="9">Related tags</T.H3>
              <Row>
                {filterTags(data.tags, tags, 'person').length > 0 && (
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
                )}
                {filterTags(data.tags, tags, 'city_area').length > 0 && (
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
                )}
                {filterTags(data.tags, tags, 'topic').length > 0 && (
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
                )}
                {filterTags(data.tags, tags, 'country').length > 0 && (
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
                )}
                {filterTags(data.tags, tags, 'organisation').length > 0 && (
                  <Col w={[4, 12, 6]} mt="6">
                    <Category
                      shape="triangle"
                      size="small"
                      shapeColor="neutral"
                      title="Organisation"
                      to={GENERAL.CATEGORY.replace(
                        ':categoryName',
                        'organisation'
                      )}
                      relatedTags={filterTags(data.tags, tags, 'organisation')}
                    />
                  </Col>
                )}
              </Row>
            </>
          )}
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
            <Row mt="11">
              <Col w={[4, 6, 4]} mt="5" mtM="7" style={{ minWidth: 210 }}>
                <Button
                  handleClick={onReject}
                  text="Reject"
                  textColor="neutral"
                  loading={loading}
                />
              </Col>
              <Col w={[4, 6, 4]} mt="5" mtM="7" style={{ minWidth: 210 }}>
                <Button
                  bgColor="neutral"
                  to={ADMIN.EDIT_ARTICLE.replace(':articleId', data?.id)}
                  textColor="white"
                  text="Edit"
                  loading={loading}
                />
              </Col>
              <Col w={[4, 6, 4]} mt="5" mtM="7" style={{ minWidth: 210 }}>
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
