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
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
const SelectSC = styled_components_1.default.select ``;
const FieldSelect = ({ disabled, formName, hasEmpty = true, id, input, options, placeholder, meta: { error, touched }, }) => {
    const { t, sc } = (0, react_1.useContext)(index_1.FormidableContext);
    if (!formName) {
        return react_1.default.createElement("div", null, "select : erreur de param\u00E8tre : formName obligatoire");
    }
    if (!options) {
        return react_1.default.createElement("div", null, "select : erreur de param\u00E8tre : options obligatoire");
    }
    return (react_1.default.createElement(SelectSC, { ...input, as: sc && sc.select, disabled: disabled, id: id, required: true, status: touched && error ? 'error' : null },
        react_1.default.createElement("option", { "aria-label": placeholder, disabled: true, hidden: !hasEmpty, value: "" }, t && placeholder ? t(placeholder) : placeholder),
        options.map(({ disabled: d, label, value }) => (react_1.default.createElement("option", { key: value, disabled: d, value: value }, t ? t(label) : label)))));
};
exports.default = FieldSelect;
