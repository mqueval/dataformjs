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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_hash_1 = __importDefault(require("object-hash"));
var react_1 = __importDefault(require("react"));
var redux_form_1 = require("redux-form");
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = __importDefault(require("./index"));
var SectionSC = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var DataSection = function (_a) {
    var datas = _a.datas, name = _a.name, formName = _a.formName, params = _a.params, props = __rest(_a, ["datas", "name", "formName", "params"]);
    return (react_1.default.createElement(SectionSC, __assign({}, props),
        react_1.default.createElement(redux_form_1.FormSection, { name: name }, datas &&
            datas.length > 0 &&
            datas.map(function (data) { return (react_1.default.createElement(index_1.default, __assign({ key: object_hash_1.default(data) }, data, { formName: formName, params: params }))); }))));
};
exports.default = DataSection;
var templateObject_1;
