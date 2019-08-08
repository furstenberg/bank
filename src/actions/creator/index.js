export const setLogin = (key, value) => ({
  type: 'LOGIN_SET',
  key,
  value,
});

export const replaceAuth = accessToken => ({
  type: 'AUTH_REPLACE',
  data: {accessToken}
});

export const replaceAccounts = accounts => ({
  type: 'ACCOUNTS_REPLACE',
  data: accounts,
});

export const resetTransfer = () => ({
  type: 'TRANSFER_RESET',
});

export const setTransfer = (key, value) => ({
  type: 'TRANSFER_SET',
  key,
  value,
});