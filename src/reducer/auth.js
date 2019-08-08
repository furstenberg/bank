const initialState = {
  accessToken: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_REPLACE':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
