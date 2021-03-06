import { useReducer, useEffect, useRef } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import * as S from './style';
import validate from '../../validation/schemas/login';
import { login } from '../../api-calls/User';
import { Typography as T, Grid, Button, Inputs } from '../../components';
import { ADMIN } from '../../constants/nav-routes';
import { useAuth } from '../../context/auth';

const { Col, Row } = Grid;
const { BasicInput } = Inputs;

const initialState = {
  PIN: '',
  email: '',
  httpError: '',
  validationErrs: {},
  loading: false,
};
function reducer(state, newState) {
  return { ...state, ...newState };
}

const LoginPage = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const { PIN, email, loading, validationErrs, httpError } = state;

  const history = useHistory();
  const { setUser, user } = useAuth();

  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PIN, email]);

  const validateForm = () => {
    try {
      validate({
        PIN,
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
      const { error, data } = await login({ PIN, email });
      setState({ loading: false });
      if (data?.results?.length) {
        if (data.results[0].Approved) {
          setUser(data.results[0]);
        } else {
          setState({
            httpError: 'your account not approved yet!',
          });
          return;
        }
      } else {
        setState({
          httpError: 'you have entered an invalid email or PIN',
        });
        return;
      }

      if (error) {
        setState({ httpError: error.message });
      } else {
        return history.push(ADMIN.AWAITING_REVIEW);
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
          <T.H1 mb="70px">Log in</T.H1>
        </Col>
      </Row>

      <Row>
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Email"
            placeholder="Email..."
            autoFocus
            name="email"
            type="email"
            value={email}
            handleChange={(input) => setState({ email: input })}
            error={validationErrs.email}
          />
        </Col>
      </Row>
      <Row mt="7">
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Unique PIN"
            placeholder="add your PIN here..."
            type="text"
            value={PIN}
            handleChange={(input) => setState({ PIN: input })}
            error={validationErrs.PIN}
          />
        </Col>
      </Row>

      <Row mt="8">
        <Col w={[4, 12, 12]}>
          {httpError && (
            <T.P mb="5" color="error">
              {httpError}
            </T.P>
          )}
        </Col>
        <Col w={[4, 8, 8]}>
          <Button
            handleClick={handleSubmit}
            loading={loading}
            textColor="primaryMain"
            bgColor="neutral"
            type="submit"
            w={isTablet ? '100%' : '470px'}
          >
            {isTablet ? (
              'Log in'
            ) : (
              <T.H1
                size="extraLarge"
                weight="semi"
                color="primaryMain"
                style={{ width: 300 }}
              >
                Log in
              </T.H1>
            )}
          </Button>
        </Col>
      </Row>
    </S.Form>
  );
};

export default LoginPage;
