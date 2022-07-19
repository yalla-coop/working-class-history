import { useEffect, useState } from 'react';
import * as S from './style';
import {
  Typography as T,
  Grid,
  Image,
  Tags,
  Button,
  TimelineGraphic,
  Map,
} from '../../components';
import { Skeleton } from 'antd';

import { getArticleById, updateArticleStatus } from '../../api-calls/Article';

import SocialSection from './SocialSection';
import { useHistory, useParams } from 'react-router';
import { ADMIN, GENERAL, EXTERNAL } from '../../constants/nav-routes';
import { useAuth } from '../../context/auth';
import { apiData } from '../../constants/index';
import { getMonthName } from '../../helpers';

const { Col, Row } = Grid;
const { ArticleTag, Category } = Tags;

const filterTags = (relatedTags, allTags, category) => {
  if (relatedTags?.length && allTags?.length) {
    return allTags
      .filter((item) => category === item?.data?.Category.value)
      .map((item) => item.data);
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
        const { error, data, tagsWithData } = await getArticleById({ id });
        setHasAccess(() => {
          return user?.Approved && data.status.id === apiData.STATUS.pending;
        });
        setData(data);
        if (tagsWithData) {
          const tidiedTags = tagsWithData.filter(
            (item) => item?.data?.Title?.length > 0
          );
          setTags(tidiedTags);
        }
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
              title={data?.title}
              image={data?.media}
            />

            {data?.media && <Image src={data.media} mt="36px" mtT="2" />}
            {data?.media_caption && (
              <T.P size="small" mt="3" style={{ width: '100%' }}>
                {data.media_caption}
              </T.P>
            )}
            {data?.media_credit && (
              <T.P size="small" mb="2" mt="1">
                Credit: {data.media_credit}
              </T.P>
            )}
            <Row mt="9">
              <Col w={[4, 10, 10]}>
                <S.RichText
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
              </Col>
            </Row>
          </S.ArticleContent>
          <Row>
            <Col w={[4, 10, 10]}>
              <S.MapSection mt="8" mb="6">
                <Map
                  type="specific"
                  id={id}
                  longitude={data?.longitude}
                  latitude={data?.latitude}
                />
              </S.MapSection>
            </Col>
          </Row>

          <Row mt="11">
            <T.H3 mb="5" color="neutral" style={{ widt: '100%' }}>
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
            <Row mt="9" mb="9">
              <T.H3 mb="5" color="neutral" style={{ width: '100%' }}>
                Sources
              </T.H3>
              <Row>
                <Col w={[4, 10, 10]}>
                  {data?.sources.includes('<p>') ? (
                    <S.RichText
                      dangerouslySetInnerHTML={{ __html: data?.sources }}
                    />
                  ) : (
                    data?.sources
                      .split('; ')
                      .map((source) => <T.P mb="2">{source}</T.P>)
                  )}
                </Col>
              </Row>
            </Row>
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
              <Row inner>
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
                      to={GENERAL.CATEGORY.replace(':categoryName', 'areas')}
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
                      title="Topics"
                      to={GENERAL.CATEGORY.replace(':categoryName', 'topics')}
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
                      to={GENERAL.CATEGORY.replace(
                        ':categoryName',
                        'countries'
                      )}
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
                        'organisations'
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

          {data?.extra_media?.length > 0 && (
            <>
              <Row mt="9">
                <T.H3 mb="4" color="neutral" style={{ width: '100%' }}>
                  Further images
                </T.H3>
              </Row>
              <Row inner>
                {data.extra_media.map((media, index) => (
                  <Col w={[4, 6, 6]} mb="2">
                    <Image
                      src={data.extra_media_media[index]?.value}
                      mt="36px"
                    />
                    <T.P size="small" mt="3" style={{ width: '100%' }}>
                      {data.extra_media_caption[index]?.value}
                    </T.P>
                    <T.P size="small" mt="1" mb="2">
                      Credit: {data.extra_media_credit[index]?.value}
                    </T.P>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {!hasAccess && (
            <Row mt="9">
              <Col w={[4, 7, 7]}>
                <S.SupportUsWrapper
                  href={EXTERNAL.SUPPORT}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    bgColor="neutral"
                    textColor="primaryMain"
                    text="Support us"
                  />
                </S.SupportUsWrapper>
              </Col>
              {user?.Approved && data?.status?.id === apiData.STATUS.published && (
                <Col w={[4, 7, 4]} mt="0" mtT="7" mtM="3">
                  <Button
                    bgColor="neutral"
                    to={ADMIN.EDIT_ARTICLE.replace(':articleId', data?.id)}
                    textColor="white"
                    text="Edit"
                    loading={loading}
                  />
                </Col>
              )}
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

      <TimelineGraphic number={data?.year} />
    </>
  );
};

export default ArticlePage;
