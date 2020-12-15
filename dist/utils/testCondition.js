"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ fieldValue, operator, value, }) => {
    switch (operator) {
        case '==': {
            switch (typeof fieldValue) {
                case 'string': {
                    return Boolean(0 === String(fieldValue).localeCompare(value));
                }
                case 'number':
                default: {
                    console.info(fieldValue, value);
                    return Boolean(fieldValue === value);
                }
            }
        }
        case '!=': {
            return Boolean(fieldValue !== value);
        }
        case 'in': {
            const newArray = !Array.isArray(value) ? [value] : value;
            return Boolean(newArray.includes(fieldValue));
        }
    }
    return false;
};
