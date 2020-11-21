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
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var Loading_1 = __importDefault(require("../../icons/Loading"));
var styles_1 = require("./styles");
/**
 * Button
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {object} props.datas
 * @param {boolean} props.disabled
 * @param {React.ReactElement} props.iconLeft
 * @param {React.ReactElement} props.iconRight
 * @param {boolean} props.large
 * @param {boolean} props.loading
 * @param {Function} props.onClick
 * @param {string} props.size
 * @param {boolean} props.square
 * @param {string} props.theme
 * @param {string} props.to
 * @param {string} props.value
 *
 * @returns {React.ReactNode}
 */
var Button = function (_a) {
    var children = _a.children, className = _a.className, datas = _a.datas, disabled = _a.disabled, iconLeft = _a.iconLeft, iconRight = _a.iconRight, large = _a.large, loading = _a.loading, onClick = _a.onClick, size = _a.size, square = _a.square, theme = _a.theme, to = _a.to, value = _a.value;
    if (to) {
        return (react_1.default.createElement(styles_1.LinkEl, { className: className, disabled: disabled, large: large, size: size, square: square, theme: theme, to: to },
            iconLeft,
            children && (react_1.default.createElement(styles_1.ButtonText, { className: (iconLeft && 'text-left') || (iconRight && 'text-right') }, children)),
            iconRight,
            loading && (react_1.default.createElement(styles_1.IsLoading, null,
                react_1.default.createElement(Loading_1.default, null)))));
    }
    return (react_1.default.createElement(styles_1.ButtonSC, __assign({ className: className, disabled: disabled, large: large, onClick: onClick, size: size, square: square, theme: theme, to: to, value: value }, datas),
        iconLeft,
        children && (react_1.default.createElement(styles_1.ButtonText, { className: (iconLeft && 'text-left') || (iconRight && 'text-right') }, children)),
        iconRight,
        loading && (react_1.default.createElement(styles_1.IsLoading, null,
            react_1.default.createElement(Loading_1.default, null)))));
};
Button.defaultProps = {
    children: null,
    className: null,
    datas: null,
    disabled: false,
    iconLeft: null,
    iconRight: null,
    large: false,
    loading: false,
    name: null,
    onClick: null,
    size: 'base',
    square: false,
    target: null,
    theme: null,
    to: null,
    type: null,
    value: null,
};
Button.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
    iconLeft: prop_types_1.default.node,
    iconRight: prop_types_1.default.node,
    large: prop_types_1.default.bool,
    loading: prop_types_1.default.bool,
    name: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    size: prop_types_1.default.oneOf(['small', 'base', 'big']),
    square: prop_types_1.default.bool,
    target: prop_types_1.default.oneOf(['_blank']),
    theme: prop_types_1.default.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'neutral',
        'link',
        'light',
        'danger',
        'warning',
    ]),
    to: prop_types_1.default.string,
    type: prop_types_1.default.string,
    value: prop_types_1.default.string,
};
exports.default = Button;
