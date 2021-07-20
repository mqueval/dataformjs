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
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../../index");
const validators_1 = require("../../../utils/validators");
const Input_1 = __importDefault(require("./Input"));
const Render_1 = __importDefault(require("./Render"));
const Wrapper_1 = __importDefault(require("./Wrapper"));
const InputGroupSC = styled_components_1.default.div ``;
const InputGroupItemSC = styled_components_1.default.div ``;
const TranslationsSC = styled_components_1.default.div ``;
const TranslationsItemSC = styled_components_1.default.div ``;
const TranslalationsItemLangSC = styled_components_1.default.div ``;
const DataField = ({ className, column, columnProps, fieldProps, isTranslatable, optionsProps, templateProps, validate, wrapperProps, ...props }) => {
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
        return (react_1.default.createElement(Wrapper_1.default, Object.assign({}, props, { column: column, columnProps: columnProps, id: newId, wrapperProps: wrapperProps }),
            react_1.default.createElement(InputGroupSC, Object.assign({ as: sc && sc.inputGroup }, optionsProps, { role: "radiogroup" }), options.map(option => (react_1.default.createElement(InputGroupItemSC, { key: option.value, as: sc && sc.inputGroupItem },
                react_1.default.createElement(redux_form_1.Field, Object.assign({ fieldProps: fieldProps, templateProps: templateProps }, props, { className: className, component: Input_1.default, description: option.label, id: option.id || `${newId}_${option.value}`, validate: newValidate, value: option.value }))))))));
    }
    return (react_1.default.createElement(Wrapper_1.default, Object.assign({}, props, { column: column, columnProps: columnProps, id: newId, wrapperProps: wrapperProps }),
        react_1.default.createElement(redux_form_1.Field, Object.assign({}, props, { className: className, component: Render_1.default, fieldProps: fieldProps, id: newId, templateProps: templateProps, validate: newValidate })),
        isTranslatable && params && params.traductions && (react_1.default.createElement(TranslationsSC, { as: sc && sc.translation }, params.traductions.map((traduction, index) => (react_1.default.createElement(TranslationsItemSC, { key: object_hash_1.default({ name, traduction }), as: sc && sc.translationItem },
            react_1.default.createElement(TranslalationsItemLangSC, { as: sc && sc.translationItemLang, lang: traduction }),
            react_1.default.createElement(redux_form_1.Field, Object.assign({}, props, { className: className, component: Render_1.default, fieldProps: fieldProps, id: newId, name: `traductions[${index}].${name}`, templateProps: templateProps, validate: newValidate })))))))));
};
exports.default = DataField;
