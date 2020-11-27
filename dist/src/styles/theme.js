"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacing = exports.radius = exports.font = exports.control = exports.colors = exports.boxShadow = exports.mediaQueryMax = exports.mediaQueryMin = exports.breakpoint = exports.header = exports.container = exports.gutter = exports.transition = exports.lineHeight = void 0;
/* eslint-disable sort-keys-shorthand/sort-keys-shorthand */
const polished_1 = require("polished");
const colors_1 = __importDefault(require("./colors"));
exports.colors = colors_1.default;
const control_1 = __importDefault(require("./control"));
exports.control = control_1.default;
const font_1 = __importDefault(require("./font"));
exports.font = font_1.default;
const radius_1 = __importDefault(require("./radius"));
exports.radius = radius_1.default;
const spacing_1 = __importDefault(require("./spacing"));
exports.spacing = spacing_1.default;
const theme = {
    borderRadius: '5px',
    colors: colors_1.default,
    control: control_1.default,
    font: font_1.default,
    spacing: spacing_1.default,
};
exports.lineHeight = {
    xs: 1,
    s: 1.15,
    m: 1.25,
    l: 1.5,
    xl: 1.625,
};
exports.transition = {
    timing: {
        base: '0.3s',
        fast: '0.15s',
    },
    easing: {
        base: 'ease-in-out',
    },
};
exports.gutter = {
    size: {
        xxxl: 48,
        xxl: 40,
        xl: 32,
        l: 16,
        m: 8,
    },
};
exports.container = {
    size: {
        m: 1000,
    },
};
exports.header = {
    height: {
        base: 80,
        small: 64,
    },
};
exports.breakpoint = {
    smartphone: 480,
    tablet: 768,
    desktop: 1024,
    bigDesktop: 1300,
    ultraWide: 2000,
    mainNav: 900,
};
/**
 * mqUp
 *
 * @param {number} size
 * @returns {string}
 */
const mediaQueryMin = (size) => `@media (min-width: ${polished_1.em(size)})`;
exports.mediaQueryMin = mediaQueryMin;
/**
 * mqDown
 *
 * @param {number} size
 * @returns {string}
 */
const mediaQueryMax = (size) => `@media (max-width: ${polished_1.em(size + -1)})`;
exports.mediaQueryMax = mediaQueryMax;
exports.boxShadow = {
    alternate: `0 ${polished_1.rem(3)} ${polished_1.rem(16)} 0 ${polished_1.rgba(colors_1.default.primary[700], 0.05)}`,
    base: `0 ${polished_1.rem(3)} ${polished_1.rem(16)} 0 ${polished_1.rgba(colors_1.default.dark[700], 0.05)}`,
    big: `0 ${polished_1.rem(3)} ${polished_1.rem(16)} 0 ${polished_1.rgba(colors_1.default.dark[700], 0.1)}`,
};
exports.default = theme;
// import { em, rem, rgba } from 'polished';
//
//
//
// export const lineHeight = {
//   xs: 1,
//   s: 1.15,
//   m: 1.25,
//   l: 1.5,
//   xl: 1.625,
// };
//
// export const transition = {
//   timing: {
//     base: '0.3s',
//     fast: '0.15s',
//   },
//   easing: {
//     base: 'ease-in-out',
//   },
// };
//
// export const gutter = {
//   size: {
//     xxxl: 48,
//     xxl: 40,
//     xl: 32,
//     l: 16,
//     m: 8,
//   },
// };
//
// export const container = {
//   size: {
//     m: 1000,
//   },
// };
//
// export const header = {
//   height: {
//     base: 80,
//     small: 64,
//   },
// };
//
// export const breakpoint = {
//   smartphone: 480,
//   tablet: 768,
//   desktop: 1024,
//   bigDesktop: 1300,
//   ultraWide: 2000,
//   mainNav: 900,
// };
//
// /**
//  * mqUp
//  *
//  * @param {number} size
//  * @returns {string}
//  */
//
// export const mediaQueryMin = (size: number): string =>
//   `@media (min-width: ${em(size)})`;
// /**
//  * mqDown
//  *
//  * @param {number} size
//  * @returns {string}
//  */
// export const mediaQueryMax = (size: number): string =>
//   `@media (max-width: ${em(size + -1)})`;
//
// export const boxShadow = {
//   alternate: `0 ${rem(3)} ${rem(16)} 0 ${rgba(color.primary.darker, 0.05)}`,
//   base: `0 ${rem(3)} ${rem(16)} 0 ${rgba(color.neutral.darker, 0.05)}`,
//   big: `0 ${rem(3)} ${rem(16)} 0 ${rgba(color.neutral.darker, 0.1)}`,
// };
