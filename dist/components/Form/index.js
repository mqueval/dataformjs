"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const Data_1 = __importDefault(require("../Data"));
const Render_1 = __importDefault(require("./Render"));
const Form = ({ cancelLabel, cancelOnClick, children, className, datas, destroyOnUnmount, enableReinitialize, forceUnregisterOnUnmount, id, initialValues, name, onSubmit, params, submitLabel, validate, }) => {
    const newDatas = datas && !Array.isArray(datas) ? [datas] : datas;
    return (react_1.default.createElement(Render_1.default, { cancelLabel: cancelLabel, cancelOnClick: cancelOnClick, className: className, destroyOnUnmount: destroyOnUnmount, enableReinitialize: enableReinitialize, forceUnregisterOnUnmount: forceUnregisterOnUnmount, id: id, initialValues: initialValues, name: name, onSubmit: onSubmit, submitLabel: submitLabel, validate: validate },
        newDatas &&
            newDatas.map((props) => (react_1.default.createElement(Data_1.default, Object.assign({ key: object_hash_1.default(props) }, props, { formName: name, params: params })))),
        children));
};
exports.default = Form;
