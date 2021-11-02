import { useReducer, useEffect, useRef } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import * as S from './style';
import validate from '../../validation/schemas/signup';
import { signup, isEmailUsed } from '../../api-calls/User';
import { Typography as T, Grid, Button, Inputs } from '../../components';
import { ADMIN, GENERAL } from '../../constants/nav-routes';
import { useAuth } from '../../context/auth';

const { Col, Row } = Grid;
const { BasicInput, Textarea } = Inputs;

const initialState = {
  full_name: '',
  why_join: '',
  academic_credentials: '',
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
    full_name,
    why_join,
    academic_credentials,
    email,
    loading,
    validationErrs,
    httpError,
  } = state;
  const { user } = useAuth();
  const history = useHistory();
  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });
  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [full_name, why_join, academic_credentials, email]);

  const validateForm = () => {
    try {
      validate({
        full_name,
        why_join,
        academic_credentials,
        email,
      });
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.full_name === 'ValidationError') {
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
      const emailAlreadyUsed = await isEmailUsed({ email });
      if (!emailAlreadyUsed) {
        const { error } = await signup({
          full_name,
          why_join,
          academic_credentials,
          email,
        });
        if (error) {
          setState({ httpError: error.message });
        } else {
          history.push(GENERAL.SUCCESS_SIGN_UP);
        }
        setState({ loading: false });
      } else {
        setState({
          validationErrs: {
            ...validationErrs,
            email: 'this email address is already being used',
          },
        });
      }
    }
  };
  if (user?.id) {
    return <Redirect to={ADMIN.AWAITING_REVIEW} />;
  }
  return (
    <S.Form onSubmit={handleSubmit}>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb={7}>Sign up</T.H1>
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
            value={full_name}
            autoFocus
            handleChange={(input) => setState({ full_name: input })}
            error={validationErrs.full_name}
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
            value={why_join}
            handleChange={(input) => setState({ why_join: input })}
            error={validationErrs.why_join}
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
            value={academic_credentials}
            handleChange={(input) => setState({ academic_credentials: input })}
            error={validationErrs.academic_credentials}
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
