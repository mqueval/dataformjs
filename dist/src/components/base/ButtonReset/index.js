"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var ButtonReset = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  background-color: transparent;\n  font-family: inherit;\n  padding: 0;\n  line-height: 1;\n  cursor: pointer;\n\n  @media screen and (-ms-high-contrast: active) {\n    border: 2px solid currentcolor;\n  }\n"], ["\n  border: none;\n  background-color: transparent;\n  font-family: inherit;\n  padding: 0;\n  line-height: 1;\n  cursor: pointer;\n\n  @media screen and (-ms-high-contrast: active) {\n    border: 2px solid currentcolor;\n  }\n"])));
exports.default = ButtonReset;
var templateObject_1;
