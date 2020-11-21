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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_hash_1 = __importDefault(require("object-hash"));
var react_1 = __importStar(require("react"));
var redux_form_1 = require("redux-form");
var initializeValues_1 = __importDefault(require("../../../utils/initializeValues"));
var Button_1 = __importDefault(require("../../Button"));
var Field_1 = __importDefault(require("../Field"));
var index_1 = __importDefault(require("../index"));
var DataArrayRender = function (_a) {
    var addButtonIcon = _a.addButtonIcon, addButtonLabel = _a.addButtonLabel, addButtonPosition = _a.addButtonPosition, datas = _a.datas, _b = _a.defaultValue, defaultValue = _b === void 0 ? '' : _b, fields = _a.fields, meta = _a.meta;
    react_1.useEffect(function () {
        if (0 === fields.length) {
            fields.push(initializeValues_1.default(datas));
        }
    }, [datas, fields]);
    if (!datas) {
        return react_1.default.createElement("div", null, "datas obligatoire");
    }
    var handleAddButtonOnClick = function () {
        fields.push(initializeValues_1.default(datas));
    };
    return (react_1.default.createElement("div", null,
        'top' === addButtonPosition && (react_1.default.createElement(Button_1.default, { iconLeft: addButtonIcon, onClick: handleAddButtonOnClick }, addButtonLabel)),
        fields &&
            fields.map(function (field) {
                if (datas && datas.length > 0) {
                    if (datas.length > 1 || datas[0].datas) {
                        return (react_1.default.createElement(redux_form_1.FormSection, { key: field + "_" + object_hash_1.default(datas), name: field }, datas.map(function (value) { return (react_1.default.createElement(index_1.default, __assign({ key: field + "_" + object_hash_1.default(value) }, value))); })));
                    }
                    return react_1.default.createElement(index_1.default, __assign({ key: field }, datas[0], { name: field }));
                }
                return react_1.default.createElement(Field_1.default, { key: field, componentType: "input", name: field });
            }),
        'bottom' === addButtonPosition && (react_1.default.createElement(Button_1.default, { iconLeft: addButtonIcon, onClick: handleAddButtonOnClick }, addButtonLabel))));
};
exports.default = DataArrayRender;
