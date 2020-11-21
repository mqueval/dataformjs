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
var index_1 = require("../../../index");
var MessageSC = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var FieldSC = styled_components_1.default.div.attrs(function (props) { return ({
    className: props.className || 'pb-2',
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var FieldTemplate = function (_a) {
    var children = _a.children, className = _a.className, customInfos = _a.customInfos, id = _a.id, name = _a.input.name, label = _a.label, _b = _a.meta, error = _b.error, touched = _b.touched, warning = _b.warning;
    var _c = react_1.useContext(index_1.FormidableContext), t = _c.t, theme = _c.theme;
    console.info('field template name', name);
    return (react_1.default.createElement(FieldSC, { as: theme && theme.field, className: className },
        customInfos && react_1.default.createElement("div", { className: "float-right" }, customInfos),
        react_1.default.createElement("label", { htmlFor: id }, t ? t(label || name) : label || name),
        react_1.default.createElement("div", null,
            children,
            touched &&
                ((error && (react_1.default.createElement(MessageSC, { as: theme && theme.message, theme: "error" }, t ? t(error) : error))) ||
                    (warning && (react_1.default.createElement(MessageSC, { as: theme && theme.message, theme: "warning" }, t ? t(warning) : warning)))))));
};
exports.default = FieldTemplate;
var templateObject_1, templateObject_2;
