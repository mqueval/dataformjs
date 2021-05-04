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
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
const validators_1 = require("../../../utils/validators");
const Input_1 = __importDefault(require("./Input"));
const Render_1 = __importDefault(require("./Render"));
const Wrapper_1 = __importDefault(require("./Wrapper"));
const InputGroupSC = styled_components_1.default.div ``;
const DataField = ({ className, column, columnOptions, fieldClassName, optionsClassName, templateClassName, validate, wrapperClassName, ...props }) => {
    const { sc } = react_1.useContext(index_1.FormidableContext);
    const { componentType, id, name, options, required, params, type } = props;
    const newId = id || `${params && params.name ? `${params.name}.` : ''}${name}`;
    let newValidate = validate && !Array.isArray(validate) ? [validate] : validate;
    if (required) {
        newValidate = validators_1.addValidator(validators_1.isRequired, newValidate);
    }
    switch (type) {
        case 'date': {
            newValidate = validators_1.addValidator(validators_1.isDate, newValidate);
            break;
        }
        case 'email': {
            newValidate = validators_1.addValidator(validators_1.isEmail, newValidate);
            break;
        }
        case 'time': {
            newValidate = validators_1.addValidator(validators_1.isTime, newValidate);
            break;
        }
        default:
    }
    if ('radio' === type && 'input' === componentType) {
        if (!options || 0 === options.length) {
            return react_1.default.createElement("div", null, "input : erreur de param\u00E8tre : options obligatoire");
        }
        return (react_1.default.createElement(Wrapper_1.default, Object.assign({}, props, { column: column, columnOptions: columnOptions, id: newId, wrapperClassName: wrapperClassName }),
            react_1.default.createElement(InputGroupSC, { as: sc && sc.inputGroup, className: optionsClassName, role: "radiogroup" }, options.map(option => (react_1.default.createElement(redux_form_1.Field, Object.assign({ key: option.value, fieldClassName: fieldClassName, templateClassName: templateClassName }, props, { className: classnames_1.default('"grid grid-cols-2 items-center"', className), component: Input_1.default, description: option.label, id: option.id || `${newId}_${option.value}`, validate: newValidate, value: option.value })))))));
    }
    return (react_1.default.createElement(Wrapper_1.default, Object.assign({}, props, { column: column, columnOptions: columnOptions, id: newId, wrapperClassName: wrapperClassName }),
        react_1.default.createElement(redux_form_1.Field, Object.assign({}, props, { className: className, component: Render_1.default, fieldClassName: fieldClassName, id: newId, templateClassName: templateClassName, validate: newValidate }))));
};
exports.default = DataField;
