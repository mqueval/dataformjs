"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (test, params) => {
    const newTest = !Array.isArray(test) ? [test] : test;
    return newTest.map(t => {
        let { field } = t;
        if (field && params.name) {
            field = field.replace(/{{name}}/gi, params.name);
        }
        return {
            ...t,
            field,
        };
    });
};
