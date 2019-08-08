import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  validateStatus: () => true,
});

export const getAccounts = async (customerId, accessToken) => {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
    customerId,
  };
  const response = await instance.get(
    'https://api.sbanken.no/exec.bank/api/v1/accounts',
    { headers },
  );
  return response;
};

export const login = async (clientId, secret) => {
  const basicAuth = `${encodeURIComponent(clientId)}:${encodeURIComponent(
    secret,
  )}`;
  const body = qs.stringify({ grant_type: 'client_credentials' });
  const headers = {
    Accept: 'application/json',
    Authorization: `Basic ${btoa(basicAuth)}`,
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  };

  const response = await instance.post(
    'https://auth.sbanken.no/identityserver/connect/token',
    body,
    { headers },
  );
  return response;
};

export const transfer = async (customerId, accessToken, fromAccount, toAccount, amount) => {

  const body = {
      "fromAccountId": fromAccount,
      "toAccountId": toAccount,
      "message": "Test",
      "amount": amount.indexOf(".") === -1 ? amount+".00" : amount
  };
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
    customerId,
    'Content-Type': 'application/json',
  };

  const response = await instance.post(
    'https://api.sbanken.no/exec.bank/api/v1/Transfers',
    body,
    { headers },
  );
  return response;
};
