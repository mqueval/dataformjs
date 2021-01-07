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
const index_1 = require("../../../index");
const initializeValues_1 = __importDefault(require("../../../utils/initializeValues"));
const Button_1 = __importDefault(require("../../Button"));
const Field_1 = __importDefault(require("../Field"));
const index_2 = __importDefault(require("../index"));
const DataArrayRender = ({ addButtonClassName, addButtonIcon, addButtonId, addButtonLabel, addButtonPosition, addButtonSize, addButtonStatus, datas, fields, formName, formValues, params, removeButtonClassName, removeButtonIcon, removeButtonLabel, removeButtonSize, removeButtonStatus, }) => {
    const { t } = react_1.useContext(index_1.FormidableContext);
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
    const handleRemoveButtonOnClick = (event) => {
        const index = event.currentTarget.getAttribute('data-index');
        if (index) {
            fields.remove(parseInt(index, 10));
        }
    };
    return (react_1.default.createElement("div", null,
        'top' === addButtonPosition && (react_1.default.createElement(Button_1.default, { className: addButtonClassName, iconLeft: addButtonIcon, onClick: handleAddButtonOnClick, size: addButtonSize, status: addButtonStatus }, addButtonLabel)),
        fields &&
            fields.map((field, index) => {
                const removeCmp = (removeButtonIcon || removeButtonLabel) && (react_1.default.createElement(Button_1.default, { className: removeButtonClassName, "data-index": index, iconLeft: removeButtonIcon, onClick: handleRemoveButtonOnClick, size: removeButtonSize, status: removeButtonStatus }, t && removeButtonLabel
                    ? t(removeButtonLabel)
                    : removeButtonLabel));
                if (datas && datas.length > 0) {
                    if (datas.length > 1 || datas[0].datas) {
                        return (react_1.default.createElement(redux_form_1.FormSection, { key: `${field}_${object_hash_1.default(datas)}`, name: field }, datas.map(value => (react_1.default.createElement(index_2.default, Object.assign({ key: `${field}_${object_hash_1.default(value)}` }, value, { customInfos: removeCmp, formName: formName, formValues: formValues, params: {
                                ...params,
                                index,
                                count: index + 1,
                                name: field,
                            } }))))));
                    }
                    return (react_1.default.createElement(index_2.default, Object.assign({ key: field }, datas[0], { customInfos: removeCmp, formName: formName, formValues: formValues, name: field, params: {
                            ...params,
                            name: field,
                        } })));
                }
                return (react_1.default.createElement(Field_1.default, { key: field, componentType: "input", customInfos: removeCmp, formName: formName, formValues: formValues, name: field, params: {
                        ...params,
                        name: field,
                    } }));
            }),
        'bottom' === addButtonPosition && (react_1.default.createElement(Button_1.default, { iconLeft: addButtonIcon, id: addButtonId, onClick: handleAddButtonOnClick, size: addButtonSize, status: addButtonStatus }, t && addButtonLabel ? t(addButtonLabel) : addButtonLabel))));
};
exports.default = DataArrayRender;
