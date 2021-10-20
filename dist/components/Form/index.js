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
const deep_object_diff_1 = require("deep-object-diff");
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importStar(require("react"));
const redux_form_1 = require("redux-form");
const initializeValues_1 = __importDefault(require("../../utils/initializeValues"));
const Data_1 = __importDefault(require("../Data"));
const Render_1 = __importDefault(require("./Render"));
const Form = ({ actions, asyncChangeFields, asyncValidate, autosave, bodyProps, cancelProps, children, className, datas, destroyOnUnmount, enableReinitialize, forceUnregisterOnUnmount, footerProps, hideSubmitButton, id, initialValues, isSubmissive, keepDirtyOnReinitialize, name, onChange, onSubmit, params, removePristine, submitProps, touchOnChange, updateUnregisteredFields, validate, }) => {
    const [timeoutId, setTimeoutId] = (0, react_1.useState)();
    const [canBeSubmited, setCanBeSubmited] = (0, react_1.useState)();
    const newDatas = datas && !Array.isArray(datas) ? [datas] : datas;
    const handleOnChange = (values, dispatch, props, previousValues) => {
        if (onChange) {
            onChange(values, dispatch, props, previousValues);
        }
        if (autosave) {
            setCanBeSubmited(true);
            if (Object.keys((0, deep_object_diff_1.diff)(values, previousValues)).length > 0) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                setTimeoutId(setTimeout(() => {
                    if (canBeSubmited) {
                        dispatch((0, redux_form_1.submit)(name));
                    }
                }, 1000));
            }
        }
    };
    return (react_1.default.createElement(Render_1.default, { actions: actions, asyncChangeFields: asyncChangeFields, asyncValidate: asyncValidate, bodyProps: bodyProps, cancelProps: cancelProps, className: className, destroyOnUnmount: destroyOnUnmount, enableReinitialize: enableReinitialize, footerProps: footerProps, forceUnregisterOnUnmount: forceUnregisterOnUnmount, hideSubmitButton: hideSubmitButton, id: id, initialValues: initialValues || (newDatas && (0, initializeValues_1.default)(newDatas)), isSubmissive: isSubmissive, keepDirtyOnReinitialize: keepDirtyOnReinitialize, name: name, onChange: handleOnChange, onSubmit: onSubmit, removePristine: removePristine, submitProps: submitProps, touchOnChange: touchOnChange, updateUnregisteredFields: updateUnregisteredFields, validate: validate },
        newDatas &&
            newDatas.map((props) => (react_1.default.createElement(Data_1.default, { key: (0, object_hash_1.default)(props), ...props, formName: name, params: {
                    ...params,
                } }))),
        children));
};
exports.default = Form;
