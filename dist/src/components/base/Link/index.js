"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
/**
 * Link
 *
 * @param {object} props
 * @param {any} props.children
 * @param {string} props.to
 * @param {string} props.className
 * @param {boolean} props.partiallyActive
 * @param {string} props.title
 * @returns {React.ReactNode}
 */
var Link = function (_a) {
    var children = _a.children, className = _a.className, partiallyActive = _a.partiallyActive, title = _a.title, to = _a.to;
    var internal = /^\/(?!\/)/.test(to);
    if (internal) {
        return (react_1.default.createElement(gatsby_1.Link, { activeClassName: "is-active", className: className, partiallyActive: partiallyActive, to: to }, children));
    }
    return (react_1.default.createElement("a", { className: className, href: to, rel: "noopener noreferrer", target: "_blank", title: title }, children));
};
Link.defaultProps = {
    className: null,
    partiallyActive: false,
    title: null,
};
Link.propTypes = {
    className: prop_types_1.default.string,
    partiallyActive: prop_types_1.default.bool,
    title: prop_types_1.default.string,
    to: prop_types_1.default.string.isRequired,
};
exports.default = Link;
