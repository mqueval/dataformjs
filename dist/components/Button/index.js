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
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../index");
const Icon_1 = __importDefault(require("../Icon"));
const ButtonSC = styled_components_1.default.button ``;
const Button = ({ className, children, disabled, iconColor, iconLeft, iconRight, id, onClick, size, status, type = 'button', ...props }) => {
    const { sc } = react_1.useContext(index_1.FormidableContext);
    if ('submit' !== type && !onClick) {
        return react_1.default.createElement("div", null, "la fonction onClick est obligatoire");
    }
    console.info('iconLeft', iconLeft);
    return (react_1.default.createElement(ButtonSC, Object.assign({ as: sc && sc.button, className: className, disabled: disabled, id: id, onClick: onClick, size: size, status: status, type: type }, props),
        iconLeft && react_1.default.createElement(Icon_1.default, { color: iconColor, value: iconLeft }),
        children && react_1.default.createElement("span", null, children),
        iconRight && react_1.default.createElement(Icon_1.default, { color: iconColor, value: iconRight })));
};
exports.default = Button;
