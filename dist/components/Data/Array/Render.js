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
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importStar(require("react"));
const redux_form_1 = require("redux-form");
const initializeValues_1 = __importDefault(require("../../../utils/initializeValues"));
const Button_1 = __importDefault(require("../../Button"));
const Field_1 = __importDefault(require("../Field"));
const index_1 = __importDefault(require("../index"));
const DataArrayRender = ({ addButtonIcon, addButtonLabel, addButtonPosition, datas, defaultValue = '', fields, formName, meta, params, }) => {
    react_1.useEffect(() => {
        if (0 === fields.length) {
            fields.push(initializeValues_1.default(datas));
        }
    }, [datas, fields]);
    if (!datas) {
        return react_1.default.createElement("div", null, "datas obligatoire");
    }
    const handleAddButtonOnClick = () => {
        fields.push(initializeValues_1.default(datas));
    };
    return (react_1.default.createElement("div", null,
        'top' === addButtonPosition && (react_1.default.createElement(Button_1.default, { iconLeft: addButtonIcon, onClick: handleAddButtonOnClick }, addButtonLabel)),
        fields &&
            fields.map(field => {
                if (datas && datas.length > 0) {
                    if (datas.length > 1 || datas[0].datas) {
                        return (react_1.default.createElement(redux_form_1.FormSection, { key: `${field}_${object_hash_1.default(datas)}`, name: field }, datas.map(value => (react_1.default.createElement(index_1.default, Object.assign({ key: `${field}_${object_hash_1.default(value)}` }, value, { formName: formName, params: params }))))));
                    }
                    return (react_1.default.createElement(index_1.default, Object.assign({ key: field }, datas[0], { formName: formName, name: field, params: params })));
                }
                return (react_1.default.createElement(Field_1.default, { key: field, componentType: "input", formName: formName, name: field }));
            }),
        'bottom' === addButtonPosition && (react_1.default.createElement(Button_1.default, { iconLeft: addButtonIcon, onClick: handleAddButtonOnClick }, addButtonLabel))));
};
exports.default = DataArrayRender;
