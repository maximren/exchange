import { applyMiddleware, createStore } from 'redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middleware = [thunk, logger];
const initialState = Map();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store;
