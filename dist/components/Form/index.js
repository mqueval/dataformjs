"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const initializeValues_1 = __importDefault(require("../../utils/initializeValues"));
const Data_1 = __importDefault(require("../Data"));
const Render_1 = __importDefault(require("./Render"));
const Form = ({ actions, asyncChangeFields, asyncValidate, bodyClassName, cancelClassName, cancelIcon, cancelIconColor, cancelLabel, cancelOnClick, cancelStatus, children, className, datas, destroyOnUnmount, enableReinitialize, forceUnregisterOnUnmount, footerClassName, hideSubmitButton, id, initialValues, isSubmissive, name, onChange, onSubmit, params, submitClassName, submitIcon, submitIconColor, submitIconLeft, submitIconRight, submitIconSize, submitLabel, touchOnChange, validate, }) => {
    const newDatas = datas && !Array.isArray(datas) ? [datas] : datas;
    return (react_1.default.createElement(Render_1.default, { actions: actions, asyncChangeFields: asyncChangeFields, asyncValidate: asyncValidate, bodyClassName: bodyClassName, cancelClassName: cancelClassName, cancelIcon: cancelIcon, cancelIconColor: cancelIconColor, cancelLabel: cancelLabel, cancelOnClick: cancelOnClick, cancelStatus: cancelStatus, className: className, destroyOnUnmount: destroyOnUnmount, enableReinitialize: enableReinitialize, footerClassName: footerClassName, forceUnregisterOnUnmount: forceUnregisterOnUnmount, hideSubmitButton: hideSubmitButton, id: id, initialValues: initialValues || (newDatas && initializeValues_1.default(newDatas)), isSubmissive: isSubmissive, name: name, onChange: onChange, onSubmit: onSubmit, submitClassName: submitClassName, submitIcon: submitIcon, submitIconColor: submitIconColor, submitIconLeft: submitIconLeft, submitIconRight: submitIconRight, submitIconSize: submitIconSize, submitLabel: submitLabel, touchOnChange: touchOnChange, validate: validate },
        newDatas &&
            newDatas.map((props) => (react_1.default.createElement(Data_1.default, Object.assign({ key: object_hash_1.default(props) }, props, { formName: name, params: params })))),
        children));
};
exports.default = Form;
