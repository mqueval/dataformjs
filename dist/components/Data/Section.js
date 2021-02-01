"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const Group_1 = __importDefault(require("../Group"));
const index_1 = __importDefault(require("./index"));
const SectionSC = styled_components_1.default.div ``;
const DataSection = ({ className, datas, name, formName, formValues, group, groupOptions, params, }) => {
    const SectionCmp = group ? Group_1.default : SectionSC;
    const props = group ? groupOptions : {};
    return (react_1.default.createElement(SectionCmp, Object.assign({ className: className }, props),
        react_1.default.createElement(redux_form_1.FormSection, { name: name }, datas &&
            datas.length > 0 &&
            datas.map(data => (react_1.default.createElement(index_1.default, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, formValues: formValues, params: params })))))));
};
exports.default = DataSection;
