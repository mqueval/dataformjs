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
var SelectSC = styled_components_1.default.select(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var FieldSelect = function (_a) {
    var disabled = _a.disabled, _b = _a.hasEmpty, hasEmpty = _b === void 0 ? true : _b, id = _a.id, input = _a.input, options = _a.options, placeholder = _a.placeholder, _c = _a.meta, error = _c.error, touched = _c.touched;
    var theme = react_1.useContext(index_1.FormidableContext).theme;
    if (!options) {
        return react_1.default.createElement("div", null, "options obligatoire");
    }
    return (react_1.default.createElement(SelectSC, __assign({}, input, { as: theme && theme.select, disabled: disabled, id: id, required: true, theme: touched && error ? 'error' : null }),
        react_1.default.createElement("option", { "aria-label": placeholder, disabled: true, hidden: !hasEmpty, value: "" }, placeholder),
        options.map(function (_a) {
            var label = _a.label, value = _a.value;
            return (react_1.default.createElement("option", { key: value, value: value }, label));
        })));
};
exports.default = FieldSelect;
var templateObject_1;
