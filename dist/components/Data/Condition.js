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
var react_redux_1 = require("react-redux");
var redux_form_1 = require("redux-form");
var verifyCondition_1 = __importDefault(require("../../utils/verifyCondition"));
var index_1 = __importDefault(require("./index"));
var DataCondition = function (_a) {
    var datas = _a.datas, formName = _a.formName, valid = _a.valid;
    if (!valid) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, datas &&
        datas.length > 0 &&
        datas.map(function (data) { return (react_1.default.createElement(index_1.default, __assign({ key: object_hash_1.default(data) }, data, { formName: formName }))); })));
};
exports.default = react_redux_1.connect(function (state, props) {
    if (!props.formName) {
        throw new Error('the formName props est obligatoire');
    }
    var formValues = redux_form_1.getFormValues(props.formName)(state);
    var test = props.test;
    return {
        valid: verifyCondition_1.default({ formValues: formValues, test: test }),
    };
})(DataCondition);
