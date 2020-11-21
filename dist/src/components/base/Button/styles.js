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
exports.LinkEl = exports.ButtonSC = exports.IsLoading = exports.ButtonText = void 0;
var polished_1 = require("polished");
var styled_components_1 = __importStar(require("styled-components"));
var theme_1 = require("../../../styles/theme");
var ButtonReset_1 = __importDefault(require("../ButtonReset"));
var Link_1 = __importDefault(require("../Link"));
exports.ButtonText = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.IsLoading = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  margin: 0 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"], ["\n  position: absolute;\n  margin: 0 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"])));
var buttonThemeStyles = function (_a) {
    var theme = _a.theme;
    switch (theme) {
        case 'neutral':
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background: ", ";\n        color: ", ";\n        box-shadow: inset 0 0 0 1px ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n        box-shadow: inset 0 0 0 1px ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "])), theme_1.color.light, theme_1.color.primary[700], theme_1.color.neutral[300], theme_1.color.primary[300], polished_1.darken(0.125, theme_1.color.primary[500]), exports.IsLoading, theme_1.color.light);
        case 'link':
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background: transparent;\n        color: ", ";\n        padding: 0 !important;\n        min-height: auto !important;\n        line-height: inherit; !important;\n        font-weight: inherit;\n        &:hover {\n          background: transparent;\n          color: ", ";\n        }\n      "], ["\n        background: transparent;\n        color: ", ";\n        padding: 0 !important;\n        min-height: auto !important;\n        line-height: inherit; !important;\n        font-weight: inherit;\n        &:hover {\n          background: transparent;\n          color: ", ";\n        }\n      "])), theme_1.color.dark[500], theme_1.color.primary[400]);
        case 'secondary':
            return styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "])), theme_1.color.secondary[500], theme_1.color.secondary[700], theme_1.color.secondary[400], theme_1.color.secondary[700], exports.IsLoading, theme_1.color.secondary[500]);
        case 'tertiary':
            return styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "])), theme_1.color.tertiary[500], theme_1.color.dark[500], theme_1.color.tertiary[400], theme_1.color.primary[500], exports.IsLoading, theme_1.color.tertiary[400]);
        case 'light':
            return styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        background: ", ";\n        color: ", ";\n        box-shadow: inset 0 0 0 1px ", ";\n        transition: all ", " ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n          box-shadow: inset 0 0 0 1px ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n        box-shadow: inset 0 0 0 1px ", ";\n        transition: all ", " ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n          box-shadow: inset 0 0 0 1px ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "])), theme_1.color.light, theme_1.color.primary[400], theme_1.color.dark[300], theme_1.transition.timing.base, theme_1.transition.easing.base, polished_1.lighten(0.05, theme_1.color.light[500]), theme_1.color.primary[500], theme_1.color.light[400], exports.IsLoading, theme_1.color.light[500]);
        case 'danger':
            return styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "])), theme_1.color.danger[500], theme_1.color.light, theme_1.color.danger[700], theme_1.color.light, exports.IsLoading, theme_1.color.danger[500]);
        default:
            return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "], ["\n        background: ", ";\n        color: ", ";\n        &:hover {\n          background: ", ";\n          color: ", ";\n        }\n        ", " {\n          background: ", ";\n        }\n      "])), theme_1.color.primary[500], theme_1.color.light[300], theme_1.color.primary[800], theme_1.color.light, exports.IsLoading, theme_1.color.primary[700]);
    }
};
var buttonSizeProps = function (_a) {
    var large = _a.large, size = _a.size, square = _a.square;
    switch (size) {
        case 'small':
            return styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        font-size: ", ";\n        min-height: ", ";\n        padding: ", " ", ";\n        min-width: ", ";\n        border-radius: ", ";\n        > * + * {\n          margin-left: ", ";\n        }\n        svg {\n          height: ", ";\n          width: ", ";\n        }\n      "], ["\n        font-size: ", ";\n        min-height: ", ";\n        padding: ", " ", ";\n        min-width: ", ";\n        border-radius: ", ";\n        > * + * {\n          margin-left: ", ";\n        }\n        svg {\n          height: ", ";\n          width: ", ";\n        }\n      "])), polished_1.rem(theme_1.font.size.xs), polished_1.rem(32), polished_1.rem(4), square ? 0 : polished_1.rem(12), square ? polished_1.rem(32) : 'initial', polished_1.rem(theme_1.radius.xs), polished_1.rem(6), polished_1.rem(14), polished_1.rem(14));
        case 'big':
            return styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        min-height: ", ";\n        padding: ", " ", ";\n        min-width: ", ";\n        border-radius: ", ";\n        ", " {\n          min-width: ", ";\n        }\n        > * + * {\n          margin-left: ", ";\n        }\n        svg {\n          height: ", ";\n          width: ", ";\n        }\n      "], ["\n        min-height: ", ";\n        padding: ", " ", ";\n        min-width: ", ";\n        border-radius: ", ";\n        ", " {\n          min-width: ", ";\n        }\n        > * + * {\n          margin-left: ", ";\n        }\n        svg {\n          height: ", ";\n          width: ", ";\n        }\n      "])), polished_1.rem(48), polished_1.rem(8), square ? 0 : polished_1.rem(24), square ? polished_1.rem(48) : 'initial', polished_1.rem(theme_1.radius.s), exports.ButtonText, large ? polished_1.rem(100) : 'initial', polished_1.rem(12), polished_1.rem(16), polished_1.rem(16));
        default:
            return styled_components_1.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n        min-height: ", ";\n        padding: ", " ", ";\n        min-width: ", ";\n        border-radius: ", ";\n        ", " {\n          min-width: ", ";\n        }\n        > * + * {\n          margin-left: ", ";\n        }\n      "], ["\n        min-height: ", ";\n        padding: ", " ", ";\n        min-width: ", ";\n        border-radius: ", ";\n        ", " {\n          min-width: ", ";\n        }\n        > * + * {\n          margin-left: ", ";\n        }\n      "])), polished_1.rem(40), polished_1.rem(11), square ? 0 : polished_1.rem(16), square ? polished_1.rem(40) : 'initial', polished_1.rem(theme_1.radius.s), exports.ButtonText, large ? polished_1.rem(100) : 'initial', polished_1.rem(12));
    }
};
exports.ButtonSC = styled_components_1.default(ButtonReset_1.default)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: ", ";\n  text-align: center;\n  transition: background ", " ", ",\n    color ", " ", ",\n    box-shadow ", " ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n\n  ", ";\n  ", ";\n\n  &:focus {\n    outline: none;\n  }\n\n  @media screen and (-ms-high-contrast: active) {\n    border: 2px solid currentcolor;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: ", ";\n  text-align: center;\n  transition: background ", " ", ",\n    color ", " ", ",\n    box-shadow ", " ", ";\n  opacity: ", ";\n  pointer-events: ",
    ";\n\n  ",
    ";\n  ", ";\n\n  &:focus {\n    outline: none;\n  }\n\n  @media screen and (-ms-high-contrast: active) {\n    border: 2px solid currentcolor;\n  }\n"])), theme_1.font.weight.medium, theme_1.transition.timing.base, theme_1.transition.easing.base, theme_1.transition.timing.base, theme_1.transition.easing.base, theme_1.transition.timing.base, theme_1.transition.easing.base, function (props) { return (props.disabled ? 0.5 : 1); }, function (props) {
    return props.disabled ? 'none !important' : 'auto';
}, function (props) {
    return buttonThemeStyles(props);
}, function (props) { return buttonSizeProps(props); });
exports.ButtonSC.defaultProps = {
    large: false,
    size: 'base',
    square: false,
};
exports.LinkEl = styled_components_1.default(exports.ButtonSC).attrs({
    as: Link_1.default,
})(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  text-decoration: none;\n"], ["\n  text-decoration: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
