"use strict";
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
var Column_1 = __importDefault(require("../Column"));
var Columns_1 = __importDefault(require("../Columns"));
var Group_1 = __importDefault(require("../Group"));
var Array_1 = __importDefault(require("./Array"));
var Condition_1 = __importDefault(require("./Condition"));
var Field_1 = __importDefault(require("./Field"));
var Section_1 = __importDefault(require("./Section"));
var Data = function (_a) {
    var datas = _a.datas, formName = _a.formName, params = _a.params, props = __rest(_a, ["datas", "formName", "params"]);
    var componentType = props.componentType, test = props.test, name = props.name, options = props.options, title = props.title, type = props.type;
    if (!componentType) {
        return react_1.default.createElement("div", null, "erreur de param\u00E8tre : componentType obligatoire");
    }
    switch (componentType) {
        case 'array': {
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            if ('group' === type) {
                return (react_1.default.createElement(Group_1.default, { title: title },
                    react_1.default.createElement(Array_1.default, { datas: datas, name: name })));
            }
            return react_1.default.createElement(Array_1.default, { datas: datas, name: name });
        }
        case 'column': {
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            return (react_1.default.createElement(Column_1.default, __assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(function (data) { return (react_1.default.createElement(Data, __assign({ key: "" + object_hash_1.default(data) }, data, { formName: formName }))); })));
        }
        case 'columns': {
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            return (react_1.default.createElement(Columns_1.default, __assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(function (data) { return (react_1.default.createElement(Data, __assign({ key: object_hash_1.default(data) }, data, { formName: formName }))); })));
        }
        case 'condition': {
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            if (!test) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : test obligatoire"));
            }
            if (!formName) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : formName obligatoire"));
            }
            return (react_1.default.createElement(Condition_1.default, __assign({}, props, { datas: datas, formName: formName, test: test })));
        }
        case 'group': {
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            return (react_1.default.createElement(Group_1.default, __assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(function (data) { return (react_1.default.createElement(Data, __assign({ key: object_hash_1.default(data) }, data, { formName: formName }))); })));
        }
        case 'select': {
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            if (!options) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : options obligatoire"));
            }
            return react_1.default.createElement(Field_1.default, __assign({}, props, { componentType: "select", name: name }));
        }
        case 'section': {
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return react_1.default.createElement(Section_1.default, __assign({}, props, { datas: datas, name: name }));
        }
        case 'textarea':
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return react_1.default.createElement(Field_1.default, __assign({}, props, { componentType: "textarea", name: name }));
        case 'hidden':
        case 'input':
            if (!type) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : type obligatoire"));
            }
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return react_1.default.createElement(Field_1.default, __assign({}, props, { componentType: "input", name: name }));
        default:
            return (react_1.default.createElement("div", null, componentType + " : ce type de composant n'est pas pris en charge"));
    }
};
exports.default = Data;
