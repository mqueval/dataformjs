"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AsyncSelect_1 = __importDefault(require("./AsyncSelect"));
const Input_1 = __importDefault(require("./Input"));
const Select_1 = __importDefault(require("./Select"));
const Template_1 = __importDefault(require("./Template"));
const Textarea_1 = __importDefault(require("./Textarea"));
const DataFieldRender = props => {
    const { className, componentType, fieldProps, handleOnChange, handleOnBlur, id, input, templateProps, } = props;
    const newInput = { ...input };
    const { onChange, onBlur } = input;
    if (handleOnChange) {
        newInput.onChange = (event) => {
            handleOnChange({ event, name: input.name });
            onChange(event);
        };
    }
    if (handleOnBlur) {
        newInput.onBlur = (event) => {
            const { value } = event.currentTarget;
            handleOnBlur({ event, value, name: input.name });
            onBlur(event);
        };
    }
    if ('hidden' === componentType) {
        return react_1.default.createElement("input", Object.assign({}, input, { type: "hidden" }));
    }
    let Component;
    switch (componentType) {
        case 'async-select': {
            Component = AsyncSelect_1.default;
            break;
        }
        case 'input': {
            Component = Input_1.default;
            break;
        }
        case 'select': {
            Component = Select_1.default;
            break;
        }
        case 'textarea': {
            Component = Textarea_1.default;
            break;
        }
        default:
            return (react_1.default.createElement("div", null, `data field render : erreur de paramètre : ${componentType} n'est pas pris en charge`));
    }
    return (react_1.default.createElement(Template_1.default, Object.assign({ id: id }, props, templateProps),
        react_1.default.createElement(Component, Object.assign({}, props, fieldProps, { className: className, input: newInput }))));
};
exports.default = DataFieldRender;
