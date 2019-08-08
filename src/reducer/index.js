import { combineReducers } from 'redux';
import loginForm from './loginForm';
import transferForm from './transferForm';
import auth from './auth';
import accounts from './accounts';

const reducer = combineReducers({
  loginForm,
  auth,
  accounts,
  transferForm,
});

export default reducer;
