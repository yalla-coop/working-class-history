import { useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { getYear, format } from 'date-fns';

import {
  Typography as T,
  Grid,
  Button,
  Inputs,
  Editor,
} from '../../components';
import * as S from './style';
import validate from '../../validation/schemas/contribute';

import { createArticle } from '../../api-calls/Article';

import { navRoutes, formData } from '../../constants';
import { apiData } from '../../constants/index';

import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

const { Col, Row } = Grid;
const { BasicInput, DateInput, Textarea, Select } = Inputs;

const initialState = {
  title: '',
  date: null,
  description: '',
  previewText: '',
  sources: '',
  latitude: '',
  longitude: '',
  geotagInfo: '',
  geotagDescription: '',
  visitorInformation: '',
  authorName: '',
  authorUrl: '',
  email: '',
  year: '',
  month: '',
  day: '',
  time: '',
  httpError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  if (newState.date) {
    const year = getYear(newState.date);
    const month = newState.date.getMonth() + 1;
    const day = newState.date.getDate();
    const time = format(newState.date.getTime(), 'HH:mm');
    return { ...state, year, month, day, time, ...newState };
  }
  return { ...state, ...newState };
}
const cleanText = (txt) => txt?.replace(/<\/?[^>]+(>|$)/g, '');

const ContributeForm = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    title,
    date,
    description,
    moreInfo,
    previewText,
    sources,
    latitude,
    longitude,
    geotagInfo,
    geotagDescription,
    visitorInformation,
    authorName,
    authorUrl,
    email,
    year,
    day,
    time,
    month,
    loading,
    validationErrs,
    httpError,
  } = state;
  const history = useHistory();
  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, previewText, email]);

  const validateForm = () => {
    try {
      validate({
        title,
        date,
        description: cleanText(description),
        moreInfo: cleanText(moreInfo),
        previewText,
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
      const { error } = await createArticle({
        title,
        year,
        month,
        day,
        time,
        description,
        more_info: moreInfo,
        preview_text: previewText,
        sources,
        latitude,
        longitude,
        geotag_info: geotagInfo,
        geotag_description: geotagDescription,
        visitor_info: visitorInformation,
        author_name: authorName,
        author_url: authorUrl,
        author_email: email,
        status: apiData.STATUS.pending,
      });

      setState({ loading: false });

      if (error) {
        setState({ httpError: error.message });
      } else {
        history.push(navRoutes.GENERAL.SUCCESS_EVENT_SUBMIT);
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
            placeholder="DD/MM/YYYY"
            value={date}
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
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <Textarea
            label="Preview text"
            placeholder="preview text..."
            type="text"
            value={previewText}
            handleChange={(input) => setState({ previewText: input })}
            error={validationErrs.previewText}
          />
        </Col>
      </Row>
      <Row mt="8">
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
        <Col w={[4, 12, 12]}>
          <Editor
            label="Sources (optional)"
            placeholder="Sources..."
            type="text"
            editorHtml={sources || ''}
            setEditorHtml={(input) => setState({ sources: input })}
            error={validationErrs.sources}
            small
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Latitude (optional)"
            placeholder="e.g. e.g. 51.492599118181836"
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
            placeholder="e.g. -0.10925629120604793"
            type="text"
            value={longitude}
            handleChange={(input) => setState({ longitude: input })}
            error={validationErrs.longitude}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <Select
            label="Geotag info (optional)"
            placeholder="e.g. exact location"
            options={formData.GEOTAG}
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
            placeholder="e.g. This was the street where the event took place"
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
            placeholder="e.g. A bank now sits on the site"
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
          <T.P mb="4" color="error">
            {httpError}
          </T.P>
        )}

        {Object.keys(validationErrs)?.length > 0 && (
          <T.P mb="4" ml="3" color="error">
            Errors submitting - please check the fields above
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
              'Submit  event'
            ) : (
              <T.H1
                size="extraLarge"
                weight="semi"
                color="neutral"
                style={{ width: 300 }}
              >
                Submit event
              </T.H1>
            )}
          </Button>
        </Col>
      </Row>
    </S.Form>
  );
};

export default ContributeForm;
