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
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const FormidableContext_1 = __importDefault(require("../../FormidableContext"));
const Button_1 = __importDefault(require("../Button"));
const Data_1 = __importDefault(require("../Data"));
const StepSC = styled_components_1.default.div ``;
const Step = ({ actions, actionsClassName, backOnClick, children, datas, className, formName, nextOnClick, params, }) => {
    const { sc, t } = react_1.useContext(FormidableContext_1.default);
    const newActions = actions && (Array.isArray(actions) ? actions : [actions]);
    const handleActionOnClick = (event) => {
        const index = event.currentTarget.getAttribute('data-index');
        if (newActions && index) {
            switch (newActions[parseInt(index, 10)].action) {
                case 'back':
                    return backOnClick && backOnClick();
                case 'next':
                    return nextOnClick && nextOnClick();
                case 'submit':
                default:
            }
        }
        return null;
    };
    return (react_1.default.createElement(StepSC, { as: sc && sc.step, className: className },
        datas &&
            datas.length > 0 &&
            datas.map(data => (react_1.default.createElement(Data_1.default, Object.assign({ key: object_hash_1.default(data) }, data, { formName: formName, params: params })))),
        children,
        newActions && (react_1.default.createElement("div", { className: actionsClassName }, newActions.map((action, index) => (react_1.default.createElement(Button_1.default, { key: object_hash_1.default({
                action: action.action,
                className: action.className,
                label: action.label,
                status: action.status,
            }), "data-index": index, iconLeft: action.iconLeft, iconRight: action.iconRight, onClick: handleActionOnClick, status: action.status, type: 'submit' === action.action ? 'submit' : 'button' }, t && action.label ? t(action.label) : action.label)))))));
};
exports.default = Step;
