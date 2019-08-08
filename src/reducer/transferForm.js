const initialState = {
  from: '',
  to: '',
  amount: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_RESET':
      return Object.assign({}, initialState);
    case 'TRANSFER_SET':
      return Object.assign({}, state, { [action.key]: action.value });
    default:
      return state;
  }
}
