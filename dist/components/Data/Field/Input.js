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
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
const DataFieldInputSC = styled_components_1.default.div.attrs(props => ({
    className: props.className || 'flex items-center',
})) ``;
const InputSC = styled_components_1.default.input ``;
const FieldInput = ({ className, description, disabled, id, input, placeholder, type = 'text', meta: { error, touched }, }) => {
    const { t, theme } = react_1.useContext(index_1.FormidableContext);
    // if (!type) {
    //   return <div>input : erreur de paramètre : type obligatoire</div>;
    // }
    return (react_1.default.createElement(DataFieldInputSC, { className: className },
        react_1.default.createElement(InputSC, Object.assign({}, input, { as: theme && theme.input, disabled: disabled, id: id, placeholder: t && placeholder ? t(placeholder) : placeholder, status: touched && error ? 'error' : undefined, type: type })),
        description && (react_1.default.createElement("label", { htmlFor: id }, t ? t(description) : description))));
};
exports.default = FieldInput;
