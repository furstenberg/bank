import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import t from 'prop-types';
import {
  H1,
  Form,
  FormGroup,
  Input,
  Col,
  Container,
  Button,
} from '@bootstrap-styled/v4';
import { setLogin, replaceAuth, replaceAccounts } from '../actions/creator';
import { login, getAccounts } from '../actions/api';
import { history } from '../utils';

const notyf = new Notyf();
const LoginForm = ({
  clientId,
  customerId,
  secret,
  changeClientId,
  changeCustomerId,
  changeSecret,
  submit,
}) => (
  <Form onSubmit={submit}>
    <FormGroup>
      <Input
        type="text"
        placeholder="ClientId"
        value={clientId}
        onChange={changeClientId}
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="text"
        placeholder="CustomerId (SSN)"
        value={customerId}
        onChange={changeCustomerId}
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="text"
        placeholder="Secret"
        value={secret}
        onChange={changeSecret}
      />
    </FormGroup>

    <Button color="primary" type="submit">
      {'Login'}
    </Button>
  </Form>
);
LoginForm.propTypes = {
  clientId: t.string.isRequired,
  customerId: t.string.isRequired,
  secret: t.string.isRequired,
  changeClientId: t.func.isRequired,
  changeCustomerId: t.func.isRequired,
  changeSecret: t.func.isRequired,
  submit: t.func.isRequired,
};

const LoginFormContainer = () => {
  const clientId = useSelector(state => state.loginForm.clientId);
  const customerId = useSelector(state => state.loginForm.customerId);
  const secret = useSelector(state => state.loginForm.secret);
  const dispatch = useDispatch();
  const changeClientId = useCallback(
    e => dispatch(setLogin('clientId', e.target.value)),
    [dispatch],
  );
  const changeCustomerId = useCallback(
    e => dispatch(setLogin('customerId', e.target.value)),
    [dispatch],
  );
  const changeSecret = useCallback(
    e => dispatch(setLogin('secret', e.target.value)),
    [dispatch],
  );

  const submit = useCallback(
    e => {
      e.preventDefault();
      localStorage.setItem(
        'loginForm',
        JSON.stringify({ clientId, customerId, secret }),
      );
      login(clientId, secret).then(x => {
        if (x.status === 200) {
          dispatch(replaceAuth(x.data.access_token));
          history.push('/');
          getAccounts(customerId, x.data.access_token).then(y => {
            dispatch(replaceAccounts(y.data.items));
          });
        } else {
          notyf.error('Shit');
        }
      });
    },
    [dispatch, clientId, customerId, secret],
  );
  return (
    <LoginForm
      clientId={clientId}
      customerId={customerId}
      secret={secret}
      changeClientId={changeClientId}
      changeCustomerId={changeCustomerId}
      changeSecret={changeSecret}
      submit={submit}
    />
  );
};

const Login = () => (
  <Container fluid>
    <H1>Login</H1>
    <Col md="3">
      <LoginFormContainer />
    </Col>
  </Container>
);

export default Login;
