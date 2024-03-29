import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const cachedLoginForm = localStorage.getItem('loginForm');
if (cachedLoginForm) {
  store.dispatch({ type: 'LOGIN_REPLACE', data: JSON.parse(cachedLoginForm) });
}
/* eslint-enable */
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
