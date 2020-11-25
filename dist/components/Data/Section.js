"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = __importDefault(require("./index"));
const SectionSC = styled_components_1.default.div ``;
const DataSection = ({ datas, name, formName, params, ...props }) => (react_1.default.createElement(SectionSC, Object.assign({}, props),
    react_1.default.createElement(redux_form_1.FormSection, { name: name }, datas &&
        datas.length > 0 &&
        datas.map(data => (react_1.default.createElement(index_1.default, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, params: params })))))));
exports.default = DataSection;
