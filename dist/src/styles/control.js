"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable sort-keys-shorthand/sort-keys-shorthand */
const polished_1 = require("polished");
const colors_1 = __importDefault(require("./colors"));
const radius_1 = __importDefault(require("./radius"));
const spacing_1 = __importDefault(require("./spacing"));
const control = {
    border: {
        color: {
            base: colors_1.default.primary.light,
            hover: colors_1.default.primary.base,
        },
        size: { base: 1 },
        type: 'solid',
    },
    icon: {
        color: {
            base: colors_1.default.primary,
        },
        size: {
            base: 16,
        },
    },
    size: {
        height: {
            base: polished_1.rem(40),
        },
    },
    padding: {
        x: {
            base: spacing_1.default.s,
            small: spacing_1.default.xs,
            icon: spacing_1.default.xl,
            iconSmall: spacing_1.default.xl,
        },
        y: {
            base: 0,
            small: 0,
        },
    },
    radius: {
        base: radius_1.default.s,
    },
};
exports.default = control;
