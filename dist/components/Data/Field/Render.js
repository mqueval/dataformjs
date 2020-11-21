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
var AsyncSelect_1 = __importDefault(require("./AsyncSelect"));
var Input_1 = __importDefault(require("./Input"));
var Select_1 = __importDefault(require("./Select"));
var Template_1 = __importDefault(require("./Template"));
var Textarea_1 = __importDefault(require("./Textarea"));
var DataFieldRender = function (props) {
    var componentType = props.componentType, handleOnChange = props.handleOnChange, input = props.input;
    var id = object_hash_1.default({ componentType: componentType, name: input.name }); // TODO revoir ce code car il change a chaque fois
    var newInput = __assign({}, input);
    var onChange = input.onChange;
    if (handleOnChange) {
        newInput.onChange = function (event) {
            handleOnChange(event, input.name);
            onChange(event);
        };
    }
    if ('hidden' === componentType) {
        return react_1.default.createElement("input", __assign({}, input, { type: "hidden" }));
    }
    return (react_1.default.createElement(Template_1.default, __assign({ id: id }, props),
        'async-select' === componentType && (react_1.default.createElement(AsyncSelect_1.default, __assign({}, props, { id: id, input: newInput }))),
        'input' === componentType && (react_1.default.createElement(Input_1.default, __assign({}, props, { id: id, input: newInput }))),
        'select' === componentType && (react_1.default.createElement(Select_1.default, __assign({}, props, { id: id, input: newInput }))),
        'textarea' === componentType && (react_1.default.createElement(Textarea_1.default, __assign({}, props, { id: id, input: newInput })))));
};
exports.default = DataFieldRender;
