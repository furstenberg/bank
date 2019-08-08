import React from 'react';
import { useSelector } from 'react-redux';
import { H1, H2 } from '@bootstrap-styled/v4';
import { Col, Row } from '@bootstrap-styled/v4';

const Account = ({ name, accountNumber, available, balance }) => (
  <Row>
    <Col>
      <H2>{name}</H2>
      <strong>{accountNumber}</strong>
      {' '}
      <br />
      <strong>Available:</strong>
      {' '}
      {available}
      <br />
      <strong>Balance:</strong>
      {' '}
      {balance}
      <br />
      <br />
    </Col>
  </Row>
);

const Home = ({ accounts }) => (
  <>
    <H1>Home</H1>

    {accounts.map(x => (
      <Account
        key={x.accountId}
        name={x.name}
        accountNumber={x.accountNumber}
        available={x.available}
        balance={x.balance}
      />
    ))}
  </>
);
const HomeContainer = () => {
  const accounts = useSelector(x => x.accounts.allAccounts);
  return <Home accounts={accounts} />;
};
export default HomeContainer;
