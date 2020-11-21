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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_hash_1 = __importDefault(require("object-hash"));
var react_1 = __importDefault(require("react"));
var Data_1 = __importDefault(require("../Data"));
var Render_1 = __importDefault(require("./Render"));
var Form = function (_a) {
    var children = _a.children, className = _a.className, datas = _a.datas, initialValues = _a.initialValues, name = _a.name, onSubmit = _a.onSubmit, params = _a.params, submitLabel = _a.submitLabel, validate = _a.validate;
    var newDatas = datas && !Array.isArray(datas) ? [datas] : datas;
    console.info('Form formName', name);
    return (react_1.default.createElement(Render_1.default, { className: className, initialValues: initialValues, name: name, onSubmit: onSubmit, submitLabel: submitLabel, validate: validate },
        newDatas &&
            newDatas.map(function (props) { return (react_1.default.createElement(Data_1.default, __assign({ key: object_hash_1.default(props) }, props, { formName: name, params: params }))); }),
        children));
};
exports.default = Form;
