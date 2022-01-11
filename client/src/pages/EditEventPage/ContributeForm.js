import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Typography as T,
  Grid,
  Button,
  Inputs,
  Editor,
} from '../../components';
import * as S from './style';
import validate from '../../validation/schemas/contribute';

import { updateArticleStatus } from '../../api-calls/Article';
import { apiData } from '../../constants/index';

import { ADMIN } from '../../constants/nav-routes';

import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';
import { useAuth } from '../../context/auth';

const { Col, Row } = Grid;
const { BasicInput, DateInput, Textarea } = Inputs;

const cleanText = (txt) => txt.replace(/<\/?[^>]+(>|$)/g, '');

const ContributeForm = ({ state, setState, submitAttempt, articleId }) => {
  const {
    title,
    date,
    description,
    moreInfo,
    sources,
    latitude,
    longitude,
    geotagInfo,
    geotagDescription,
    visitorInformation,
    authorName,
    authorUrl,
    email,
    loading,
    year,
    month,
    day,
    time,
    validationErrs,
    httpError,
  } = state;
  const history = useHistory();
  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });
  const { user } = useAuth();
  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, email]);
  const validateForm = () => {
    try {
      validate({
        title,
        date,
        description: cleanText(description),
        moreInfo,
        sources,
        latitude,
        longitude,
        geotagInfo,
        geotagDescription,
        visitorInformation,
        authorName,
        authorUrl,
        email,
      });
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: error.inner });
      }
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      setState({ loading: true });
      const { error } = await updateArticleStatus({
        id: articleId,
        title: state.title,
        year,
        month,
        day,
        time,
        description: state.description,
        more_info: state.moreInfo,
        sources: state.sources,
        latitude: state.latitude,
        longitude: state.longitude,
        geotag_info: state.geotagInfo,
        geotag_description: state.geotagDescription,
        visitor_info: state.visitorInformation,
        author_name: state.authorName,
        author_url: state.authorUrl,
        author_email: state.email,
        reviewerId: user.id,
        status: apiData.STATUS.approved,
      });

      setState({ loading: false });

      if (error) {
        setState({ httpError: error.message });
      } else {
        history.push(ADMIN.APPROVED);
      }
    }
  };

  return (
    <S.Form>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Title (Max 50 characters)"
            placeholder="add title here..."
            type="text"
            value={title}
            autoFocus
            handleChange={(input) => setState({ title: input })}
            error={validationErrs.title}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <DateInput
            label="Year, Month, Day (optional)"
            placeholder="dd/mm/yyyy"
            value={new Date(`${year}/${month}/${day}`)}
            handleChange={(input) => setState({ date: input })}
            error={validationErrs.date}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 12, 12]}>
          <Editor
            label="Description (Max 1800 characters)"
            placeholder="add description here..."
            editorHtml={description || ''}
            setEditorHtml={(input) => setState({ description: input })}
            error={validationErrs.description}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 12, 12]}>
          <Editor
            label="More information (optional, Max 1800 characters)"
            placeholder="add more information here..."
            editorHtml={moreInfo || ''}
            setEditorHtml={(input) => setState({ moreInfo: input })}
            error={validationErrs.moreInfo}
            small
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <Editor
            label="Sources (optional)"
            placeholder="Sources..."
            editorHtml={sources || ''}
            setEditorHtml={(input) => setState({ sources: input })}
            small
            error={validationErrs.sources}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Latitude (optional)"
            placeholder="e.g. 41°24'12.2'N 2°10'26.5'E"
            type="text"
            value={latitude}
            handleChange={(input) => setState({ latitude: input })}
            error={validationErrs.latitude}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Longitude (optional)"
            placeholder="e.g. 41°24'12.2'N 2°10'26.5'E"
            type="text"
            value={longitude}
            handleChange={(input) => setState({ longitude: input })}
            error={validationErrs.longitude}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Geotag info (optional)"
            placeholder="e.g. ..."
            type="text"
            value={geotagInfo}
            handleChange={(input) => setState({ geotagInfo: input })}
            error={validationErrs.geotagInfo}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Geotag description (optional)"
            placeholder="e.g. ..."
            type="text"
            value={geotagDescription}
            handleChange={(input) => setState({ geotagDescription: input })}
            error={validationErrs.geotagDescription}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Visitor information (optional)"
            placeholder="e.g. ..."
            type="text"
            value={visitorInformation}
            handleChange={(input) => setState({ visitorInformation: input })}
            error={validationErrs.visitorInformation}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Author name (optional)"
            placeholder="Name..."
            type="text"
            value={authorName}
            handleChange={(input) => setState({ authorName: input })}
            error={validationErrs.authorName}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Author URL (optional)"
            placeholder="URL..."
            type="text"
            value={authorUrl}
            handleChange={(input) => setState({ authorUrl: input })}
            error={validationErrs.authorUrl}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 6, 6]}>
          <T.P>
            Providing your email allows us to contact you in case there are any
            issues
          </T.P>
        </Col>
      </Row>
      <Row mt="6">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Author email"
            placeholder="Email..."
            type="email"
            value={email}
            handleChange={(input) => setState({ email: input })}
            error={validationErrs.email}
          />
        </Col>
      </Row>
      <Row mt="8">
        {httpError && (
          <T.P mb="2" color="error">
            {httpError}
          </T.P>
        )}
        <Col w={[4, 8, 8]}>
          <Button
            handleClick={handleSubmit}
            loading={loading}
            textColor="neutral"
            w={isTablet ? '100%' : '470px'}
          >
            {isTablet ? (
              'Save + approve'
            ) : (
              <T.H1
                size="extraLarge"
                weight="semi"
                color="neutral"
                style={{ width: 300 }}
              >
                Save + approve
              </T.H1>
            )}
          </Button>
        </Col>
      </Row>
    </S.Form>
  );
};

export default ContributeForm;
