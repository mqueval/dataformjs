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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormidableProvider = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const styled_components_1 = require("styled-components");
const createStore_1 = __importDefault(require("./createStore"));
const defaultState = {
    extendData: undefined,
    extraArguments: undefined,
    extraReducers: undefined,
    getControlStyle: undefined,
    initializeStore: undefined,
    initialState: {},
    sc: undefined,
    store: undefined,
    t: undefined,
    theme: undefined,
};
const FormidableContext = react_1.default.createContext(defaultState);
const FormidableProvider = ({ children, extendData, extraArguments, extraReducers, getControlStyle, initializeStore, initialState = {}, sc, t, theme, }) => {
    const [store] = react_1.useState(createStore_1.default(initialState, extraReducers, extraArguments));
    if (initializeStore) {
        initializeStore(store);
    }
    return (react_1.default.createElement(FormidableContext.Provider, { value: {
            extendData,
            getControlStyle,
            sc,
            store,
            t,
            theme,
        } },
        react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme }, children))));
};
exports.FormidableProvider = FormidableProvider;
exports.default = FormidableContext;
