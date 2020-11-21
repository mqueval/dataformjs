"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var DataFieldInputSC = styled_components_1.default.div.attrs(function (props) { return ({
    className: props.className || 'flex items-center',
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var InputSC = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var FieldInput = function (_a) {
    var className = _a.className, description = _a.description, disabled = _a.disabled, id = _a.id, input = _a.input, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.meta, error = _c.error, touched = _c.touched;
    var _d = react_1.useContext(index_1.FormidableContext), t = _d.t, theme = _d.theme;
    // if (!type) {
    //   return <div>input : erreur de paramètre : type obligatoire</div>;
    // }
    return (react_1.default.createElement(DataFieldInputSC, { className: className },
        react_1.default.createElement(InputSC, __assign({}, input, { as: theme && theme.input, disabled: disabled, id: id, placeholder: t && placeholder ? t(placeholder) : placeholder, theme: touched && error ? 'error' : null, type: type })),
        description && (react_1.default.createElement("label", { htmlFor: id }, t ? t(description) : description))));
};
exports.default = FieldInput;
var templateObject_1, templateObject_2;
