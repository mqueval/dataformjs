"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const async_1 = __importDefault(require("react-select/async"));
const DataSearchAndForm = ({ name }) => {
    const handleLoadOptions = (inputValue) => new Promise((resolve, reject) => {
        console.info('inputValue', inputValue);
        return resolve([{ label: 'Hello world', value: 'hello-world' }]);
    });
    return (react_1.default.createElement("div", null,
        "Search+Form",
        name,
        react_1.default.createElement(async_1.default, { defaultOptions: true, loadOptions: handleLoadOptions })));
};
exports.default = DataSearchAndForm;
