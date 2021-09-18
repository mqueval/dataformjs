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
const react_input_mask_1 = __importDefault(require("react-input-mask"));
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
const InputSC = styled_components_1.default.input ``;
const FieldInput = ({ autoComplete, description, descriptionParams, disabled, fieldProps, id, input, placeholder, mask, max, meta: { error, touched }, min, step, type = 'text', }) => {
    const { t, sc } = react_1.useContext(index_1.FormidableContext);
    const newFieldProps = {
        ...fieldProps,
        disabled,
        id,
        max,
        min,
        step,
        as: sc && sc.input,
        placeholder: t && placeholder ? t(placeholder) : placeholder,
        status: touched && error ? 'error' : undefined,
        type: mask ? 'text' : type,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        mask ? (react_1.default.createElement(react_input_mask_1.default, Object.assign({ mask: mask }, input), (inputProps) => (react_1.default.createElement(InputSC, Object.assign({}, inputProps, newFieldProps, { autoComplete: autoComplete }))))) : (react_1.default.createElement(InputSC, Object.assign({}, input, newFieldProps, { autoComplete: autoComplete }))),
        description && (react_1.default.createElement("label", { htmlFor: id }, t ? t(description, descriptionParams) : description))));
};
exports.default = FieldInput;
