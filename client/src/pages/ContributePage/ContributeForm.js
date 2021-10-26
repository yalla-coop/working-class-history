import { useReducer, useEffect, useRef } from 'react';
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

import { sendContribute } from '../../api-calls/Contribute';
import { GENERAL } from '../../constants/nav-routes';

import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

const { Col, Row } = Grid;
const { BasicInput, DateInput, Textarea } = Inputs;

const initialState = {
  title: '',
  date: null,
  description: '',
  sources: '',
  latitude: '',
  longitude: '',
  geotagInfo: '',
  geotagDescription: '',
  visitorInformation: '',
  authorName: '',
  authorUrl: '',
  email: '',
  httpError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}
const cleanText = (txt) => txt.replace(/<\/?[^>]+(>|$)/g, '');

const ContributeForm = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    title,
    date,
    description,
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
  }, [title, description, email]);
  const validateForm = () => {
    try {
      validate({
        title,
        date,
        description: cleanText(description),
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
      const { error } = await sendContribute({ title, date });

      setState({ loading: false });

      if (error) {
        setState({ httpError: error.message });
      } else {
        history.push(GENERAL.SUCCESS_EVENT_SUBMIT);
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
            editorHtml={description}
            setEditorHtml={(input) => setState({ description: input })}
            error={validationErrs.description}
          />
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 8, 8]}>
          <Textarea
            label="Sources (optional)"
            placeholder="Sources..."
            type="text"
            value={sources}
            handleChange={(input) => setState({ sources: input })}
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