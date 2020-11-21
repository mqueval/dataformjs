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
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var async_1 = __importDefault(require("react-select/async"));
var redux_form_1 = require("redux-form");
var index_1 = require("../../../index");
var FieldAsyncSelect = function (_a) {
    var formName = _a.formName, getOptionLabel = _a.getOptionLabel, id = _a.id, input = _a.input, isOptionSelected = _a.isOptionSelected, placeholder = _a.placeholder, searchOptions = _a.searchOptions;
    var dispatch = react_redux_1.useDispatch();
    var t = react_1.useContext(index_1.FormidableContext).t;
    if (!formName) {
        return react_1.default.createElement("div", null, "async-select : erreur de param\u00E8tre : formName obligatoire");
    }
    if (!searchOptions) {
        return (react_1.default.createElement("div", null, "async-select : erreur de param\u00E8tre : searchOptions obligatoire"));
    }
    var name = input.name;
    var handleOnBlur = function (event) {
        console.info('FieldAsyncSelect handleOnBlur', event);
    };
    var handleOnChange = function (value) {
        console.info('FieldAsyncSelect handleOnChange', value);
        dispatch(redux_form_1.change(formName, input.name, value));
    };
    var handleOnFocus = function (event) {
        console.info('FieldAsyncSelect handleOnFocus', event);
    };
    return (react_1.default.createElement(async_1.default, { defaultOptions: true, getOptionLabel: getOptionLabel, inputId: id, isClearable: true, isOptionSelected: isOptionSelected, loadOptions: searchOptions, onBlur: handleOnBlur, onChange: handleOnChange, onFocus: handleOnFocus, placeholder: t && placeholder ? t(placeholder) : placeholder }));
};
exports.default = FieldAsyncSelect;
