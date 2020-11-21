"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("../../../index");
var Input_1 = __importDefault(require("./Input"));
var Select_1 = __importDefault(require("./Select"));
var Template_1 = __importDefault(require("./Template"));
var Textarea_1 = __importDefault(require("./Textarea"));
var CustomBottomSC = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var CustomTopSC = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var DataFieldRender = function (props) {
    var componentType = props.componentType, customBottom = props.customBottom, customBottomClassName = props.customBottomClassName, customTop = props.customTop, customTopClassName = props.customTopClassName, handleOnChange = props.handleOnChange, input = props.input;
    var theme = react_1.useContext(index_1.FormidableContext).theme;
    var id = object_hash_1.default(props); // TODO revoir ce code car il change a chaque fois
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
        customTop && (react_1.default.createElement(CustomTopSC, { as: theme && theme.customTop, className: customTopClassName }, customTop)),
        'input' === componentType && (react_1.default.createElement(Input_1.default, __assign({}, props, { id: id, input: newInput }))),
        'select' === componentType && (react_1.default.createElement(Select_1.default, __assign({}, props, { id: id, input: newInput }))),
        'textarea' === componentType && (react_1.default.createElement(Textarea_1.default, __assign({}, props, { id: id, input: newInput }))),
        customBottom && (react_1.default.createElement(CustomBottomSC, { as: theme && theme.customBottom, className: customBottomClassName }, customBottom))));
};
exports.default = DataFieldRender;
var templateObject_1, templateObject_2;
