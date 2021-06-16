"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const index_1 = __importDefault(require("./index"));
const DataValues = ({ datas, formName, formValues, params, }) => (react_1.default.createElement("div", null, datas &&
    datas.length > 0 &&
    datas.map(data => (react_1.default.createElement(index_1.default, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, formValues: formValues, params: params }))))));
exports.default = react_redux_1.connect(({ form }, { formName }) => ({
    formValues: form && form[formName] && form[formName].values,
}))(DataValues);
