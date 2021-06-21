"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTime = exports.isRequired = exports.isEmail = exports.isDate = exports.addValidator = void 0;
const moment_1 = __importDefault(require("moment"));
const addValidator = (validator, validators) => {
    const newValidators = validators || [];
    newValidators.push(validator);
    return newValidators;
};
exports.addValidator = addValidator;
const isDate = (value) => {
    console.info('isDate', value);
    console.info('isDate', moment_1.default(value).isValid());
    return value && !moment_1.default(value).isValid() ? 'validator.date.error' : undefined;
};
exports.isDate = isDate;
const isEmail = (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'validator.email.error'
    : undefined;
exports.isEmail = isEmail;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const isRequired = (value) => value || 'number' === typeof value ? undefined : 'required';
exports.isRequired = isRequired;
const isTime = (value) => value && !/^([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(value)
    ? 'validator.time.error'
    : undefined;
exports.isTime = isTime;
