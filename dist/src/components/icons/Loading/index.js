"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var rotate = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var dash = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    stroke-dasharray: 1,150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90,150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90,150;\n    stroke-dashoffset: -124;\n  }\n"], ["\n  0% {\n    stroke-dasharray: 1,150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90,150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90,150;\n    stroke-dashoffset: -124;\n  }\n"])));
var Svg = styled_components_1.default.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Circle = styled_components_1.default.circle(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  stroke-dasharray: 1, 150;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  animation: ", " 1.5s ease-in-out infinite;\n"], ["\n  stroke-dasharray: 1, 150;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  animation: ", " 1.5s ease-in-out infinite;\n"])), dash);
/* eslint-disable max-len */
/**
 * Loading
 *
 * @param {object} props
 * @param {string} props.color
 * @param {number} props.size
 * @returns {React.ReactNode}
 */
var IconLoading = function (_a) {
    var color = _a.color, size = _a.size;
    return (react_1.default.createElement(Svg, { className: "no-print", height: size, viewBox: "0 0 52 52", width: size },
        react_1.default.createElement(Circle, { className: "path", cx: "26px", cy: "26px", fill: "none", r: "20px", stroke: color || 'currentColor', strokeWidth: "4px" })));
};
IconLoading.defaultProps = {
    color: null,
    size: 16,
};
IconLoading.propTypes = {
    color: prop_types_1.default.string,
    size: prop_types_1.default.number,
};
exports.default = IconLoading;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
