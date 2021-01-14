import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = extras => {
  let reducers = {
    form,
  };

  if (extras) {
    reducers = { ...reducers, ...extras };
  }

  return combineReducers(reducers);
};

export default rootReducer;
