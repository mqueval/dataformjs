import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// import auth from '../services/auth';
import auth from './auth';

const rootReducer = extras => {
  let reducers = {
    auth,
    form,
  };

  if (extras) {
    reducers = { ...reducers, ...extras };
  }

  return combineReducers(reducers);
};

export default rootReducer;
