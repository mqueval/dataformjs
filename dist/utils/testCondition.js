"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var fieldValue = _a.fieldValue, operator = _a.operator, value = _a.value;
    switch (operator) {
        case '==': {
            switch (typeof fieldValue) {
                case 'string': {
                    return Boolean(0 === String(fieldValue).localeCompare(value));
                }
                case 'number':
                default: {
                    return Boolean(fieldValue === value);
                }
            }
        }
        case '!=': {
            return Boolean(fieldValue !== value);
        }
        case 'in': {
            var newArray = !Array.isArray(value) ? [value] : value;
            return Boolean(newArray.includes(fieldValue));
        }
    }
    return false;
});
