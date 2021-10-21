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

import {
  getArticleData,
  rejectArticle,
  approveArticle,
} from '../../api-calls/Article';

import SocialSection from './SocialSection';
import { useParams } from 'react-router';
import { GENERAL } from '../../constants/nav-routes';

const { Col, Row } = Grid;
const { ArticleTag, Category } = Tags;

const ArticlePage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState('');
  const { id } = useParams();
  const hasAccess = true;
  useEffect(() => {
    const articleData = getArticleData({ id });
    setData(articleData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onReject = () => {
    setLoading(true);
    try {
      const { data, error } = rejectArticle({ id });
      if (error) {
        setPageError(error.message);
      } else {
        // eslint-disable-next-line no-console
        console.log({ data });
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
      }
    } catch (error) {
      setPageError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <T.H2>{data.name || data.title || 'N/A'}</T.H2>
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
            to="/support-us"
          />
        </Col>
      </Row>
      <TimelineGraphic type="short" number={data.year} />
      {hasAccess && (
        <>
          {pageError && (
            <T.P color="error" mt="5" mb="3">
              {pageError}
            </T.P>
          )}
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
                textColor="white"
                text="Edit"
                loading={loading}
                to={GENERAL.CONTRIBUTE}
                params={{ articleId: data.id, edit: true }}
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
        </>
      )}
    </>
  );
};

export default ArticlePage;
