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
import { setTransfer, replaceAccounts, resetTransfer } from '../actions/creator';
import { transfer, getAccounts } from '../actions/api';
import { Select, Option } from '@bootstrap-styled/v4';
import { history } from '../utils';

const notyf = new Notyf();
const TransferForm = ({
  accounts,
  fromAccount,
  toAccount,
  amount,
  changeFromAccount,
  changeToAccount,
  changeAmount,
  submit,
}) => (
  <Form onSubmit={submit}>
    <FormGroup>
      <Select placeholder="From" onChange={changeFromAccount} value={fromAccount}>
        <Option>Pick one</Option>
        {accounts.map(x =>
          <Option value={x.accountId}>{x.name}</Option>
        )}
      </Select>

    </FormGroup>
    <FormGroup>
      <Select placeholder="To" onChange={changeToAccount} value={toAccount}>
        <Option>Pick one</Option>
        {accounts.map(x =>
          <Option value={x.accountId}>{x.name}</Option>
        )}
      </Select>

    </FormGroup>
    <FormGroup>
      <Input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={changeAmount}
      />
    </FormGroup>

    <Button color="primary" type="submit">
      {'Transfer'}
    </Button>
  </Form>
);
TransferForm.propTypes = {

};

const TransferFormContainer = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const customerId = useSelector(state => state.loginForm.customerId);
  const accounts = useSelector(state => state.accounts.allAccounts);
  const fromAccount = useSelector(state => state.transferForm.from);
  const toAccount = useSelector(state => state.transferForm.to);
  const amount = useSelector(state => state.transferForm.amount);

  const dispatch = useDispatch();
  const changeFromAccount = useCallback(
    e => dispatch(setTransfer('from', e.target.value)),
    [dispatch],
  );
  const changeToAccount = useCallback(
    e => dispatch(setTransfer('to', e.target.value)),
    [dispatch],
  );
  const changeAmount = useCallback(
    e => dispatch(setTransfer('amount', e.target.value)),
    [dispatch],
  );

  const submit = useCallback(
    e => {
      e.preventDefault();
      transfer(customerId, accessToken, fromAccount, toAccount, amount).then(x=>{
        dispatch(resetTransfer());
        getAccounts(customerId, accessToken).then(y => {
          dispatch(replaceAccounts(y.data.items));
          history.push('/welcome');
        });
      });

    },
    [dispatch, accessToken, customerId, fromAccount, toAccount, amount],
  );
  return (
    <TransferForm accounts={accounts}
    fromAccount={fromAccount} toAccount={toAccount} amount={amount} changeFromAccount={changeFromAccount} changeToAccount={changeToAccount} changeAmount={changeAmount}
      submit={submit}
    />
  );
};

const Transfer = () => (
  <Container fluid>
    <H1>Transfer</H1>
    <Col md="3">
      <TransferFormContainer />
    </Col>
  </Container>
);

export default Transfer;
