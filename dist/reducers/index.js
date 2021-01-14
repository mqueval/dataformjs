"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_form_1 = require("redux-form");
const rootReducer = extras => {
    let reducers = {
        form: redux_form_1.reducer,
    };
    if (extras) {
        reducers = { ...reducers, ...extras };
    }
    return redux_1.combineReducers(reducers);
};
exports.default = rootReducer;
