"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const redux_form_1 = require("redux-form");
const verifyCondition_1 = __importDefault(require("../../utils/verifyCondition"));
const index_1 = __importDefault(require("./index"));
const DataCondition = ({ datas, formName, valid }) => {
    if (!valid) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, datas &&
        datas.length > 0 &&
        datas.map(data => (react_1.default.createElement(index_1.default, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName }))))));
};
exports.default = react_redux_1.connect((state, props) => {
    if (!props.formName) {
        throw new Error('the formName props est obligatoire');
    }
    const formValues = redux_form_1.getFormValues(props.formName)(state);
    const { test } = props;
    return {
        valid: verifyCondition_1.default({ formValues, test }),
    };
})(DataCondition);
