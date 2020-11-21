"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = exports.spacer = exports.boxShadow = exports.mediaQueryMax = exports.mediaQueryMin = exports.breakpoint = exports.radius = exports.header = exports.container = exports.gutter = exports.transition = exports.lineHeight = exports.font = exports.color = void 0;
/* eslint-disable sort-keys-shorthand/sort-keys-shorthand */
var polished_1 = require("polished");
exports.color = {
    light: {
        300: '#FFFFFF',
        400: '#FCFCFC',
        500: '#F9F9F9',
        600: '#E3E3E3',
        700: '#CDCDCE',
        800: '#B6B7B8',
        900: '#A0A1A3',
    },
    dark: {
        100: '#76777A',
        200: '#5F6164',
        300: '#494A4D',
        400: '#323437',
        500: '#1B1D21',
        600: '#17181C',
        700: '#121316',
        800: '#0E0F11',
        900: '#090A0B',
    },
    neutral: {
        100: '#F8F8F8',
        200: '#DCDDDD',
        300: '#C1C1C2',
        400: '#A5A6A7',
        500: '#8A8B8D',
        600: '#6E6F72',
        700: '#525457',
        800: '#37383C',
        900: '#1B1D21',
    },
    primary: {
        100: '#E5E0FC',
        200: '#CBC3FA',
        300: '#ACA1F1',
        400: '#9285E4',
        500: '#6C5DD3',
        600: '#5F52B5',
        700: '#514898',
        800: '#443D7A',
        900: '#36325C',
    },
    secondary: {
        100: '#C9E3FC',
        200: '#96C5F9',
        300: '#5F9EED',
        400: '#387ADC',
        500: '#0149C6',
        600: '#0038AA',
        700: '#00298E',
        800: '#001D72',
        900: '#00145F',
    },
    tertiary: {
        100: '#F1FBEA',
        200: '#E1F8D5',
        300: '#C5EAB9',
        400: '#A7D59E',
        500: '#7FBA7A',
        600: '#599F59',
        700: '#3D8543',
        800: '#266B32',
        900: '#175927',
    },
    quaternary: {
        100: '#FFEDEC',
        200: '#FFD9DA',
        300: '#FFC7CD',
        400: '#FFB9C8',
        500: '#FFA2BF',
        600: '#DB769F',
        700: '#B75185',
        800: '#93336D',
        900: '#7A1F5F',
    },
    success: {
        100: '#EFFBCE',
        200: '#DBF89F',
        300: '#BBEB6C',
        400: '#9AD846',
        500: '#6EBF13',
        600: '#56A40D',
        700: '#418909',
        800: '#2E6E06',
        900: '#215B03',
    },
    info: {
        100: '#CCFDF8',
        200: '#9AFCFA',
        300: '#67F0F8',
        400: '#40DBF1',
        500: '#06BBE8',
        600: '#0492C7',
        700: '#036DA7',
        800: '#014E86',
        900: '#01386F',
    },
    warning: {
        100: '#FFF4CC',
        200: '#FFE799',
        300: '#FFD666',
        400: '#FFC53F',
        500: '#FFAA00',
        600: '#DB8A00',
        700: '#B76D00',
        800: '#935300',
        900: '#7A4000',
    },
    danger: {
        100: '#FFE6D3',
        200: '#FFC7A8',
        300: '#FFA07C',
        400: '#FF7C5C',
        500: '#FF3F26',
        600: '#DB221B',
        700: '#B7131A',
        800: '#930C1D',
        900: '#7A071E',
    },
    logo: {
        primary: '#2c2661',
        secondary: '#b4c348',
    },
    print: {
        base: '#000',
        light: '#ddd',
    },
};
exports.font = {
    family: {
        base: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,' +
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    weight: {
        base: 400,
        medium: 600,
        bold: 700,
    },
    size: {
        xs: 12,
        s: 14,
        m: 16,
        l: 18,
        xl: 20,
        xxl: 24,
        xxxl: 28,
    },
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
exports.radius = {
    l: 16,
    m: 12,
    s: 6,
    xs: 4,
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
exports.mediaQueryMin = function (size) {
    return "@media (min-width: " + polished_1.em(size) + ")";
};
/**
 * mqDown
 *
 * @param {number} size
 * @returns {string}
 */
exports.mediaQueryMax = function (size) {
    return "@media (max-width: " + polished_1.em(size + -1) + ")";
};
exports.boxShadow = {
    alternate: "0 " + polished_1.rem(3) + " " + polished_1.rem(16) + " 0 " + polished_1.rgba(exports.color.primary[700], 0.05),
    base: "0 " + polished_1.rem(3) + " " + polished_1.rem(16) + " 0 " + polished_1.rgba(exports.color.dark[700], 0.05),
    big: "0 " + polished_1.rem(3) + " " + polished_1.rem(16) + " 0 " + polished_1.rgba(exports.color.dark[700], 0.1),
};
exports.spacer = {
    xxs: 8,
    xs: 12,
    s: 16,
    m: 24,
    l: 32,
    xl: 40,
    xxl: 48,
    xxxl: 60,
};
exports.input = {
    border: {
        color: {
            base: exports.color.light[600],
            hover: exports.color.primary[500],
        },
        size: { base: 1 },
        type: 'solid',
    },
    icon: {
        color: {
            base: exports.color.primary,
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
            base: polished_1.rem(exports.spacer.s),
            small: polished_1.rem(exports.spacer.xs),
            icon: polished_1.rem(exports.spacer.s + 16 + exports.spacer.xxs),
            iconSmall: polished_1.rem(exports.spacer.xs + 16 + exports.spacer.xxs),
        },
        y: {
            base: 0,
            small: 0,
        },
    },
    radius: {
        base: polished_1.rem(exports.radius.s),
    },
};
