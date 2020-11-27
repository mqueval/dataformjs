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
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_select_1 = __importDefault(require("react-select"));
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
const SelectSC = styled_components_1.default.select ``;
const FieldSelect = ({ disabled, formName, getOptionLabel, getOptionValue, hasEmpty = true, handleOnChange, id, input, options, placeholder, meta: { error, touched }, multi = false, ...others }) => {
    const { getControlStyle, t, theme } = react_1.useContext(index_1.FormidableContext);
    const dispatch = react_redux_1.useDispatch();
    if (!formName) {
        return react_1.default.createElement("div", null, "select : erreur de param\u00E8tre : formName obligatoire");
    }
    if (!options) {
        return react_1.default.createElement("div", null, "select : erreur de param\u00E8tre : options obligatoire");
    }
    if (multi) {
        const { name, value } = input;
        const styles = {
            control: (base) => getControlStyle
                ? getControlStyle({
                    ...others,
                    status: touched && error ? 'error' : undefined,
                })
                : base,
        };
        const handleOnBlur = () => {
            dispatch(redux_form_1.blur(formName, name, value, true));
        };
        const handleInnerOnChange = (changeValue) => {
            if (handleOnChange) {
                handleOnChange({
                    change: (...props) => dispatch(redux_form_1.change(...props)),
                    value: changeValue,
                });
            }
            dispatch(redux_form_1.change(formName, name, changeValue && changeValue.map(handleGetOptionValue)));
        };
        const handleOnFocus = () => {
            dispatch(redux_form_1.focus(formName, name));
        };
        const handleGetOptionLabel = (option) => {
            if (getOptionLabel) {
                return getOptionLabel(option);
            }
            return t && option.label ? t(option.label) : option.label;
        };
        const handleGetOptionValue = (option) => {
            if (getOptionValue) {
                return getOptionValue(option);
            }
            return option.value;
        };
        return (react_1.default.createElement(react_select_1.default, { getOptionLabel: handleGetOptionLabel, getOptionValue: handleGetOptionValue, isMulti: true, onBlur: handleOnBlur, onChange: handleInnerOnChange, onFocus: handleOnFocus, options: options, styles: styles }));
    }
    return (react_1.default.createElement(SelectSC, Object.assign({}, input, { as: theme && theme.select, disabled: disabled, id: id, required: true, status: touched && error ? 'error' : null }),
        react_1.default.createElement("option", { "aria-label": placeholder, disabled: true, hidden: !hasEmpty, value: "" }, t && placeholder ? t(placeholder) : placeholder),
        options.map(({ label, value }) => (react_1.default.createElement("option", { key: value, value: value }, t ? t(label) : label)))));
};
exports.default = FieldSelect;
