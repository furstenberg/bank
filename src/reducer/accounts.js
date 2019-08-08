const initialState = {
  allAccounts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ACCOUNTS_REPLACE':
      return Object.assign({}, { allAccounts: action.data });
    default:
      return state;
  }
}
