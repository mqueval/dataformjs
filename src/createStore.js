import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers =
  (process.env.BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const loggerMiddleware = createLogger();
const middleware = [];

const store = (
  initialState = {},
  extraReducers = null,
  extraArguments = null,
) => {
  middleware.push(thunkMiddleware.withExtraArgument(extraArguments));

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(loggerMiddleware);
  }

  return createStore(
    rootReducer(extraReducers),
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
};

export default store;
