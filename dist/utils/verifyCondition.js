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
            console.info('fieldArray', fieldArray);
            const fieldValue = fieldArray.reduce((acc, tmp) => {
                console.info('acc', acc);
                console.info('tmp', tmp);
                if (acc) {
                    if (tmp.split('[').length > 1) {
                        // c'est un tableau
                        const [newTmp, index] = tmp.slice(0, tmp.length - 1).split('[');
                        if (Object.keys(acc).includes(newTmp) && acc[newTmp][index]) {
                            console.info('tmp', acc[newTmp][index]);
                            return acc[newTmp][index];
                        }
                    }
                    else if (Object.keys(acc).includes(tmp)) {
                        console.info(`tmp ${tmp}`, acc[tmp]);
                        return acc[tmp];
                    }
                }
                return undefined;
            }, formValues);
            console.info(`condition ${field}`, fieldValue);
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
