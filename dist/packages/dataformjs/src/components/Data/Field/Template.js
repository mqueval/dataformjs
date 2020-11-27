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
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
const FieldMessageSC = styled_components_1.default.div ``;
const FieldLabelSC = styled_components_1.default.label ``;
const FieldSC = styled_components_1.default.div.attrs(props => ({
    className: classnames_1.default(props.className, 'pb-2'),
})) ``;
const CustomBottomSC = styled_components_1.default.div.attrs(props => ({
    className: classnames_1.default(props.className, 'float-right'),
})) ``;
const CustomTopSC = styled_components_1.default.div.attrs(props => ({
    className: classnames_1.default(props.className, 'float-right'),
})) ``;
const FieldTemplate = ({ children, className, customBottom, customBottomClassName, customTop, customTopClassName, id, input: { name }, label, meta: { error, touched, warning }, }) => {
    const { t, theme } = react_1.useContext(index_1.FormidableContext);
    return (react_1.default.createElement(FieldSC, { as: theme && theme.field, className: className },
        customTop && (react_1.default.createElement(CustomTopSC, { as: theme && theme.customTop, className: customTopClassName }, customTop)),
        react_1.default.createElement(FieldLabelSC, { as: theme && theme.label, htmlFor: id }, t ? t(label || name) : label || name),
        react_1.default.createElement("div", null,
            children,
            touched &&
                ((error && (react_1.default.createElement(FieldMessageSC, { as: theme && theme.fieldMessage, status: "error" }, t ? t(error) : error))) ||
                    (warning && (react_1.default.createElement(FieldMessageSC, { as: theme && theme.fieldMessage, status: "warning" }, t ? t(warning) : warning))))),
        customBottom && (react_1.default.createElement(CustomBottomSC, { as: theme && theme.customBottom, className: customBottomClassName }, customBottom))));
};
exports.default = FieldTemplate;
