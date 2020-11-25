"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_form_1 = require("redux-form");
// import auth from '../services/auth';
const auth_1 = __importDefault(require("./auth"));
const rootReducer = extras => {
    let reducers = {
        auth: auth_1.default,
        form: redux_form_1.reducer,
    };
    if (extras) {
        reducers = { ...reducers, ...extras };
    }
    return redux_1.combineReducers(reducers);
};
exports.default = rootReducer;
