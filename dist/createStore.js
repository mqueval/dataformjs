"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var redux_thunk_1 = __importDefault(require("redux-thunk"));
var reducers_1 = __importDefault(require("./reducers"));
// eslint-disable-next-line no-underscore-dangle
var composeEnhancers = (process.env.BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    redux_1.compose;
var loggerMiddleware = redux_logger_1.createLogger();
var middleware = [];
if (process.env.GATSBY_ENVIRONMENT !== 'production') {
    middleware.push(loggerMiddleware);
}
exports.default = (function (initialState, extraReducers, extraArguments) {
    if (initialState === void 0) { initialState = {}; }
    if (extraReducers === void 0) { extraReducers = null; }
    if (extraArguments === void 0) { extraArguments = null; }
    middleware.push(redux_thunk_1.default.withExtraArgument(extraArguments));
    return redux_1.createStore(reducers_1.default(extraReducers), initialState, composeEnhancers(redux_1.applyMiddleware.apply(void 0, middleware)));
});
