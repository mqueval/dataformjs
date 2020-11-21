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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("../../index");
var ButtonSC = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Button = function (_a) {
    var children = _a.children, disabled = _a.disabled, onClick = _a.onClick, _b = _a.type, type = _b === void 0 ? 'button' : _b;
    var theme = react_1.useContext(index_1.FormidableContext).theme;
    if ('submit' !== type && !onClick) {
        return react_1.default.createElement("div", null, "la fonction onClick est obligatoire");
    }
    return (react_1.default.createElement(ButtonSC, { as: theme && theme.button, disabled: disabled, onClick: onClick, type: type }, children));
};
exports.default = Button;
var templateObject_1;
