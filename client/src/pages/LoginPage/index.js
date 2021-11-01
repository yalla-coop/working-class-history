import { useReducer, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../../theme';

import * as S from './style';
import validate from '../../validation/schemas/login';
import { Login } from '../../api-calls/User';
import { Typography as T, Grid, Button, Inputs } from '../../components';
import { GENERAL } from '../../constants/nav-routes';

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
      const { error } = await Login({ PIN, email });

      setState({ loading: false });

      if (error) {
        setState({ httpError: error.message });
      } else {
        history.push(GENERAL.AWAITING_REVIEW);
      }
    }
  };
  return (
    <S.Form onSubmit={handleSubmit}>
      <T.H1 mb="70px">Log in</T.H1>

      <Row>
        <Col w={[4, 8, 8]}>
          <BasicInput
            label="Email"
            placeholder="Email..."
            autoFocus
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
        {httpError && (
          <T.P mb="2" color="error">
            {httpError}
          </T.P>
        )}
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
