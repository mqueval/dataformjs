"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequired = exports.isEmail = exports.addValidator = void 0;
const addValidator = (validator, validators) => {
    const newValidators = validators || [];
    newValidators.push(validator);
    return newValidators;
};
exports.addValidator = addValidator;
const isEmail = (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'field/error/isEmail'
    : undefined;
exports.isEmail = isEmail;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const isRequired = (value) => value || 'number' === typeof value ? undefined : 'field/error/isRequired';
exports.isRequired = isRequired;
