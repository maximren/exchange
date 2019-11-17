import { combineReducers } from 'redux-immutable';

import fetchLatestRate from './fetchLatestRate';

export default combineReducers({
  fetchLatestRate,
});