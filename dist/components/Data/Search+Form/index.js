"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var async_1 = __importDefault(require("react-select/async"));
var DataSearchAndForm = function (_a) {
    var name = _a.name;
    var handleLoadOptions = function (inputValue) {
        return new Promise(function (resolve, reject) {
            console.info('inputValue', inputValue);
            return resolve([{ label: 'Hello world', value: 'hello-world' }]);
        });
    };
    return (react_1.default.createElement("div", null,
        "Search+Form",
        name,
        react_1.default.createElement(async_1.default, { defaultOptions: true, loadOptions: handleLoadOptions })));
};
exports.default = DataSearchAndForm;
