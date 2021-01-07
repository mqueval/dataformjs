"use strict";
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataArray = void 0;
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importStar(require("react"));
const index_1 = require("../../index");
const Column_1 = __importDefault(require("../Column"));
const Columns_1 = __importDefault(require("../Columns"));
const Grid_1 = __importDefault(require("../Grid"));
const Group_1 = __importDefault(require("../Group"));
const Step_1 = __importDefault(require("../Step"));
const Steps_1 = __importDefault(require("../Steps"));
const Array_1 = __importDefault(require("./Array"));
exports.DataArray = Array_1.default;
const Condition_1 = __importDefault(require("./Condition"));
const Field_1 = __importDefault(require("./Field"));
const Search_Form_1 = __importDefault(require("./Search+Form"));
const Section_1 = __importDefault(require("./Section"));
const Values_1 = __importDefault(require("./Values"));
const Data = ({ datas, formName, formValues, ...props }) => {
    const { componentType, test, name, params } = props;
    const { extendData } = react_1.useContext(index_1.FormidableContext);
    if (!componentType) {
        return react_1.default.createElement("div", null, "erreur de param\u00E8tre : componentType obligatoire");
    }
    if (extendData) {
        const result = extendData({
            ...props,
            formName,
            formValues,
            params,
        });
        if (result) {
            return result;
        }
    }
    switch (componentType) {
        case 'array': {
            if (!name) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : name obligatoire`));
            }
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            return (react_1.default.createElement(Array_1.default, Object.assign({}, props, { datas: datas, formName: formName, formValues: formValues, name: name, params: params })));
        }
        case 'column': {
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            return (react_1.default.createElement(Column_1.default, Object.assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(data => (react_1.default.createElement(Data, Object.assign({ key: `${object_hash_1.default(data)}` }, data, { formName: formName, formValues: formValues, params: params }))))));
        }
        case 'columns': {
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            return (react_1.default.createElement(Columns_1.default, Object.assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(data => (react_1.default.createElement(Data, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, formValues: formValues, params: params }))))));
        }
        case 'condition': {
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            if (!test) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : test obligatoire`));
            }
            if (!formName) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : formName obligatoire`));
            }
            return (react_1.default.createElement(Condition_1.default, Object.assign({}, props, { datas: datas, formName: formName, formValues: formValues, test: test })));
        }
        case 'grid': {
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            return (react_1.default.createElement(Grid_1.default, Object.assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(data => (react_1.default.createElement(Data, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, formValues: formValues, params: params }))))));
        }
        case 'group': {
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            return (react_1.default.createElement(Group_1.default, Object.assign({}, props), datas &&
                datas.length > 0 &&
                datas.map(data => (react_1.default.createElement(Data, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, formValues: formValues, params: params }))))));
        }
        case 'search+form': {
            if (!name) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : name obligatoire`));
            }
            return (react_1.default.createElement(Search_Form_1.default, Object.assign({}, props, { formName: formName, formValues: formValues, name: name })));
        }
        case 'select': {
            if (!name) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : name obligatoire`));
            }
            return (react_1.default.createElement(Field_1.default, Object.assign({}, props, { componentType: "select", formName: formName, formValues: formValues, name: name })));
        }
        case 'section': {
            if (!name) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : name obligatoire`));
            }
            return (react_1.default.createElement(Section_1.default, Object.assign({}, props, { datas: datas, formName: formName, formValues: formValues, name: name, params: params })));
        }
        case 'step': {
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            return (react_1.default.createElement(Step_1.default, Object.assign({}, props, { formName: formName, params: params }), datas &&
                datas.length > 0 &&
                datas.map(data => (react_1.default.createElement(Data, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, formValues: formValues, params: params }))))));
        }
        case 'steps': {
            if (!datas) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : datas obligatoire`));
            }
            return (react_1.default.createElement(Steps_1.default, Object.assign({}, props, { datas: datas, formName: formName, formValues: formValues, params: params })));
        }
        case 'textarea':
            if (!name) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : name obligatoire`));
            }
            return (react_1.default.createElement(Field_1.default, Object.assign({}, props, { componentType: "textarea", formName: formName, formValues: formValues, name: name })));
        case 'values': {
            return (react_1.default.createElement(Values_1.default, Object.assign({}, props, { datas: datas, formName: formName, name: name, params: params })));
        }
        case 'hidden':
        case 'input':
            if (!name) {
                return (react_1.default.createElement("div", null, `${componentType} : erreur de paramètre : name obligatoire`));
            }
            return (react_1.default.createElement(Field_1.default, Object.assign({}, props, { componentType: componentType, formName: formName, formValues: formValues, name: name })));
        default: {
            return (react_1.default.createElement("div", null, `${componentType} : ce type de composant n'est pas pris en charge`));
        }
    }
};
exports.default = Data;
