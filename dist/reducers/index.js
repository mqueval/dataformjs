"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_form_1 = require("redux-form");
// import auth from '../services/auth';
var auth_1 = __importDefault(require("./auth"));
var rootReducer = function (extras) {
    var reducers = {
        auth: auth_1.default,
        form: redux_form_1.reducer,
    };
    if (extras) {
        reducers = __assign(__assign({}, reducers), extras);
    }
    return redux_1.combineReducers(reducers);
};
exports.default = rootReducer;
