"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testCondition_1 = __importDefault(require("./testCondition"));
exports.default = ({ formValues, test, }) => {
    const valid = [];
    const testArray = !Array.isArray(test)
        ? [test]
        : test;
    testArray.forEach(({ field, operator, value }) => {
        if (field && formValues) {
            const fieldArray = field.split('.');
            const fieldValue = fieldArray.reduce((acc, tmp) => acc && Object.keys(acc).includes(tmp) ? acc[tmp] : undefined, formValues);
            if (undefined !== fieldValue) {
                valid.push(testCondition_1.default({ fieldValue, operator, value }));
            }
            else {
                valid.push(false);
            }
        }
    });
    return !valid.some(val => !val);
};
