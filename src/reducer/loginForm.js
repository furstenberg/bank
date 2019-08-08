const initialState = {
  clientId: '',
  customerId: '',
  secret: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REPLACE':
      return Object.assign({}, action.data);
    case 'LOGIN_SET':
      return Object.assign({}, state, { [action.key]: action.value });
    default:
      return state;
  }
}
