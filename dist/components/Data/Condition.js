"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const replaceTestParams_1 = __importDefault(require("../../utils/replaceTestParams"));
const verifyCondition_1 = __importDefault(require("../../utils/verifyCondition"));
const Group_1 = __importDefault(require("../Group"));
const index_1 = __importDefault(require("./index"));
const ConditionSC = styled_components_1.default.div ``;
const DataCondition = ({ datas, formName, formValues, group, groupProps, className, params, valid, }) => {
    if (!valid) {
        return null;
    }
    const ConditionCmp = group ? Group_1.default : ConditionSC;
    const props = group ? groupProps : {};
    return (react_1.default.createElement(ConditionCmp, Object.assign({ className: className }, props), datas &&
        datas.length > 0 &&
        datas.map(data => (react_1.default.createElement(index_1.default, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, formValues: formValues, params: params }))))));
};
exports.default = react_redux_1.connect((state, props) => {
    if (!props.formName) {
        throw new Error('the formName props est obligatoire');
    }
    const formValues = redux_form_1.getFormValues(props.formName)(state);
    const { params, test } = props;
    const newTest = params ? replaceTestParams_1.default(test, params) : test;
    const valid = verifyCondition_1.default({ formValues, test: newTest });
    return {
        valid,
    };
})(DataCondition);
