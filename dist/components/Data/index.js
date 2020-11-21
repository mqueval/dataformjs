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
var react_1 = __importStar(require("react"));
var index_1 = require("../../index");
var Column_1 = __importDefault(require("../Column"));
var Columns_1 = __importDefault(require("../Columns"));
var Group_1 = __importDefault(require("../Group"));
var Array_1 = __importDefault(require("./Array"));
var Condition_1 = __importDefault(require("./Condition"));
var Field_1 = __importDefault(require("./Field"));
var Search_Form_1 = __importDefault(require("./Search+Form"));
var Section_1 = __importDefault(require("./Section"));
var Data = function (_a) {
    var datas = _a.datas, formName = _a.formName, props = __rest(_a, ["datas", "formName"]);
    var componentType = props.componentType, test = props.test, name = props.name, params = props.params;
    var extendData = react_1.useContext(index_1.FormidableContext).extendData;
    if (!componentType) {
        return react_1.default.createElement("div", null, "erreur de param\u00E8tre : componentType obligatoire");
    }
    if (extendData) {
        var result = extendData(__assign(__assign({}, props), { formName: formName,
            params: params }));
        if (result) {
            return result;
        }
    }
    switch (componentType) {
        case 'array': {
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            return (react_1.default.createElement(Array_1.default, __assign({}, props, { datas: datas, formName: formName, name: name, params: params })));
        }
        case 'column': {
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            return (react_1.default.createElement(Column_1.default, __assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(function (data) { return (react_1.default.createElement(Data, __assign({ key: "" + object_hash_1.default(data) }, data, { formName: formName, params: params }))); })));
        }
        case 'columns': {
            if (!datas) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : datas obligatoire"));
            }
            return (react_1.default.createElement(Columns_1.default, __assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(function (data) { return (react_1.default.createElement(Data, __assign({ key: object_hash_1.default(data) }, data, { formName: formName, params: params }))); })));
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
                datas.map(function (data) { return (react_1.default.createElement(Data, __assign({ key: object_hash_1.default(data) }, data, { formName: formName, params: params }))); })));
        }
        case 'search+form': {
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return react_1.default.createElement(Search_Form_1.default, __assign({}, props, { name: name }));
        }
        case 'select': {
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return react_1.default.createElement(Field_1.default, __assign({}, props, { componentType: "select", name: name }));
        }
        case 'section': {
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return (react_1.default.createElement(Section_1.default, __assign({}, props, { datas: datas, formName: formName, name: name, params: params })));
        }
        case 'textarea':
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return react_1.default.createElement(Field_1.default, __assign({}, props, { componentType: "textarea", name: name }));
        case 'hidden':
        case 'input':
            if (!name) {
                return (react_1.default.createElement("div", null, componentType + " : erreur de param\u00E8tre : name obligatoire"));
            }
            return react_1.default.createElement(Field_1.default, __assign({}, props, { componentType: "input", name: name }));
        default: {
            return (react_1.default.createElement("div", null, componentType + " : ce type de composant n'est pas pris en charge"));
        }
    }
};
exports.default = Data;
