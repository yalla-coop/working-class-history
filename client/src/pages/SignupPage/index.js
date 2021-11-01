import { useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import * as S from './style';
import validate from '../../validation/schemas/signup';
import { Signup } from '../../api-calls/User';
import { Typography as T, Grid, Button, Inputs } from '../../components';
import { GENERAL } from '../../constants/nav-routes';

const { Col, Row } = Grid;
const { BasicInput, Textarea } = Inputs;

const initialState = {
  name: '',
  explainer: '',
  credentials: '',
  email: '',
  httpError: '',
  validationErrs: {},
  loading: false,
};
function reducer(state, newState) {
  return { ...state, ...newState };
}

const SignupPage = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    name,
    explainer,
    credentials,
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
  }, [name, explainer, credentials, email]);

  const validateForm = () => {
    try {
      validate({
        name,
        explainer,
        credentials,
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
      const { error } = await Signup({ name, explainer, credentials, email });

      setState({ loading: false });

      if (error) {
        setState({ httpError: error.message });
      } else {
        history.push(GENERAL.SUCCESS_SIGN_UP);
      }
    }
  };
  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="70px">Sign up</T.H1>
          <Col w={[4, 12, 12]}>
            <T.P style={{ maxWidth: 600 }}>
              This is to sign up to be a reviewer of content as part of this
              project. Once you’ve created an account, it will be reviewed by
              the team and we will be in touch
            </T.P>
          </Col>
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Name"
            placeholder="add your name here..."
            type="text"
            value={name}
            autoFocus
            handleChange={(input) => setState({ name: input })}
            error={validationErrs.name}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Email"
            placeholder="Email..."
            type="email"
            value={email}
            handleChange={(input) => setState({ email: input })}
            error={validationErrs.email}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 8, 8]}>
          <Textarea
            label="Why do you want to be part of the project?"
            placeholder="A little explainer..."
            type="text"
            value={explainer}
            handleChange={(input) => setState({ explainer: input })}
            error={validationErrs.explainer}
            rows="5"
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 8, 8]}>
          <Textarea
            label="Any academic credentials?"
            placeholder="add your credentials here..."
            type="text"
            value={credentials}
            handleChange={(input) => setState({ credentials: input })}
            error={validationErrs.credentials}
            rows="3"
          />
        </Col>
      </Row>
      <Row mt="7">
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
            type="submit"
            w={isTablet ? '100%' : '470px'}
          >
            {isTablet ? (
              'Submit  details'
            ) : (
              <T.H1
                size="extraLarge"
                weight="semi"
                color="neutral"
                style={{ width: 300 }}
              >
                Submit details
              </T.H1>
            )}
          </Button>
        </Col>
      </Row>
    </S.Form>
  );
};

export default SignupPage;
