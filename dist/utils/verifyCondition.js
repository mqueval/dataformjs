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
            const fieldValue = fieldArray.reduce((acc, tmp) => {
                if (acc) {
                    if (tmp && tmp.split('[').length > 1) {
                        // c'est un tableau
                        const [newTmp, index] = tmp.slice(0, tmp.length - 1).split('[');
                        if (Object.keys(acc).includes(newTmp) && acc[newTmp][index]) {
                            return acc[newTmp][index];
                        }
                    }
                    else if (Object.keys(acc).includes(tmp)) {
                        return acc[tmp];
                    }
                }
                return undefined;
            }, formValues);
            // if (undefined !== fieldValue) {
            valid.push((0, testCondition_1.default)({ fieldValue, operator, value }));
            // } else {
            // valid.push(false);
            // }
        }
    });
    return !valid.some(val => !val);
};
