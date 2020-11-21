"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var testCondition_1 = __importDefault(require("./testCondition"));
exports.default = (function (_a) {
    var formValues = _a.formValues, test = _a.test;
    var valid = [];
    var testArray = !Array.isArray(test)
        ? [test]
        : test;
    testArray.forEach(function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        if (field && formValues) {
            var fieldArray = field.split('.');
            var fieldValue = fieldArray.reduce(function (acc, tmp) {
                return acc && Object.keys(acc).includes(tmp) ? acc[tmp] : undefined;
            }, formValues);
            if (undefined !== fieldValue) {
                valid.push(testCondition_1.default({ fieldValue: fieldValue, operator: operator, value: value }));
            }
            else {
                valid.push(false);
            }
        }
    });
    return !valid.some(function (val) { return !val; });
});
