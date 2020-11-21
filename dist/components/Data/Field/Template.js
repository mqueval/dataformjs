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
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("../../../index");
var FieldMessageSC = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var FieldSC = styled_components_1.default.div.attrs(function (props) { return ({
    className: classnames_1.default(props.className, 'pb-2'),
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var CustomBottomSC = styled_components_1.default.div.attrs(function (props) { return ({
    className: classnames_1.default(props.className, 'float-right'),
}); })(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var CustomTopSC = styled_components_1.default.div.attrs(function (props) { return ({
    className: classnames_1.default(props.className, 'float-right'),
}); })(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var FieldTemplate = function (_a) {
    var children = _a.children, className = _a.className, customBottom = _a.customBottom, customBottomClassName = _a.customBottomClassName, customTop = _a.customTop, customTopClassName = _a.customTopClassName, id = _a.id, name = _a.input.name, label = _a.label, _b = _a.meta, error = _b.error, touched = _b.touched, warning = _b.warning;
    var _c = react_1.useContext(index_1.FormidableContext), t = _c.t, theme = _c.theme;
    console.info('error', error);
    return (react_1.default.createElement(FieldSC, { as: theme && theme.field, className: className },
        customTop && (react_1.default.createElement(CustomTopSC, { as: theme && theme.customTop, className: customTopClassName }, customTop)),
        react_1.default.createElement("label", { htmlFor: id }, t ? t(label || name) : label || name),
        react_1.default.createElement("div", null,
            children,
            touched &&
                ((error && (react_1.default.createElement(FieldMessageSC, { as: theme && theme.fieldMessage, theme: "error" }, t ? t(error) : error))) ||
                    (warning && (react_1.default.createElement(FieldMessageSC, { as: theme && theme.fieldMessage, theme: "warning" }, t ? t(warning) : warning))))),
        customBottom && (react_1.default.createElement(CustomBottomSC, { as: theme && theme.customBottom, className: customBottomClassName }, customBottom))));
};
exports.default = FieldTemplate;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
