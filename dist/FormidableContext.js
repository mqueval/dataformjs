"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormidableProvider = void 0;
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var createStore_1 = __importDefault(require("./createStore"));
var defaultState = {
    extendData: undefined,
    store: undefined,
    t: undefined,
    theme: undefined,
};
var FormidableContext = react_1.default.createContext(defaultState);
var FormidableProvider = function (_a) {
    var extendData = _a.extendData, children = _a.children, t = _a.t, theme = _a.theme;
    var store = react_1.useState(createStore_1.default({}))[0];
    return (react_1.default.createElement(FormidableContext.Provider, { value: {
            extendData: extendData,
            store: store,
            t: t,
            theme: theme,
        } },
        react_1.default.createElement(react_redux_1.Provider, { store: store }, children)));
};
exports.FormidableProvider = FormidableProvider;
exports.default = FormidableContext;
