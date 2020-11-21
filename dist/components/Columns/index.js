"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var ColumnsEl = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  > div {\n    margin-right: 1.5rem;\n  }\n\n  > div:last-child {\n    margin-right: 0;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  > div {\n    margin-right: 1.5rem;\n  }\n\n  > div:last-child {\n    margin-right: 0;\n  }\n"])));
var Columns = function (_a) {
    var children = _a.children, className = _a.className;
    return (react_1.default.createElement(ColumnsEl, { className: className }, children));
};
exports.default = Columns;
var templateObject_1;
