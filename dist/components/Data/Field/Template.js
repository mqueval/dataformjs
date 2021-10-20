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
const index_1 = require("../../../index");
const CustomActionSC = styled_components_1.default.div ``;
const FieldMessageSC = styled_components_1.default.div ``;
const FieldTemplateSC = styled_components_1.default.div ``;
const FieldTemplate = ({ children, customAction, customActionProps, templateProps, message, meta: { error, touched, warning }, }) => {
    const { t, sc } = (0, react_1.useContext)(index_1.FormidableContext);
    return (react_1.default.createElement(FieldTemplateSC, { as: sc && sc.fieldTemplate, ...templateProps },
        children,
        customAction && (react_1.default.createElement(CustomActionSC, { as: sc && sc.customTop, ...customActionProps }, customAction)),
        touched &&
            ((error && (react_1.default.createElement(FieldMessageSC, { as: sc && sc.fieldMessage, status: "error" }, t ? t(error) : error))) ||
                (warning && (react_1.default.createElement(FieldMessageSC, { as: sc && sc.fieldMessage, status: "warning" }, t ? t(warning) : warning)))),
        message && (react_1.default.createElement(FieldMessageSC, { as: sc && sc.fieldMessage }, t ? t(message) : message))));
};
exports.default = FieldTemplate;
