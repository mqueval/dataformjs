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
const CustomBottomSC = styled_components_1.default.div `
  float: right;
`;
const CustomTopSC = styled_components_1.default.div `
  float: right;
`;
const FieldLabelSC = styled_components_1.default.label ``;
const FieldWrapper = ({ children, customBottom, customBottomClassName, customTop, customTopClassName, id, label, name, }) => {
    const { t, sc } = react_1.useContext(index_1.FormidableContext);
    return (react_1.default.createElement("div", null,
        customTop && (react_1.default.createElement(CustomTopSC, { as: sc && sc.customTop, className: customTopClassName }, customTop)),
        react_1.default.createElement(FieldLabelSC, { as: sc && sc.label, htmlFor: id }, t ? t(label || name) : label || name),
        react_1.default.createElement("div", null, children),
        customBottom && (react_1.default.createElement(CustomBottomSC, { as: sc && sc.customBottom, className: customBottomClassName }, customBottom))));
};
exports.default = FieldWrapper;
