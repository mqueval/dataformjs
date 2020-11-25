"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_form_1 = require("redux-form");
const validators_1 = require("../../../utils/validators");
const Render_1 = __importDefault(require("./Render"));
const DataField = ({ validate, ...props }) => {
    const { required, type } = props;
    let newValidate = validate && !Array.isArray(validate) ? [validate] : validate;
    if (required) {
        newValidate = validators_1.addValidator(validators_1.isRequired, newValidate);
    }
    if ('email' === type) {
        newValidate = validators_1.addValidator(validators_1.isEmail, newValidate);
    }
    return (react_1.default.createElement(redux_form_1.Field, Object.assign({ component: Render_1.default }, props, { validate: newValidate })));
};
exports.default = DataField;
