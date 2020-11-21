"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequired = exports.isEmail = exports.addValidator = void 0;
exports.addValidator = function (validator, validators) {
    var newValidators = validators || [];
    newValidators.push(validator);
    return newValidators;
};
exports.isEmail = function (value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'field/error/isEmail'
        : undefined;
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
exports.isRequired = function (value) {
    return value || 'number' === typeof value ? undefined : 'field/error/isRequired';
};
