"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_logger_1 = require("redux-logger");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const reducers_1 = __importDefault(require("./reducers"));
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (process.env.BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    redux_1.compose;
const loggerMiddleware = redux_logger_1.createLogger();
const middleware = [];
if (process.env.GATSBY_ENVIRONMENT !== 'production') {
    middleware.push(loggerMiddleware);
}
exports.default = (initialState = {}, extraReducers = null, extraArguments = null) => {
    middleware.push(redux_thunk_1.default.withExtraArgument(extraArguments));
    return redux_1.createStore(reducers_1.default(extraReducers), initialState, composeEnhancers(redux_1.applyMiddleware(...middleware)));
};
