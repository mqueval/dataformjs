import { DefaultTheme } from 'styled-components';
import colors from './colors';
import control from './control';
import font from './font';
import radius from './radius';
import spacing from './spacing';
export interface StatusProp {
    status?: 'dark' | 'danger' | 'develop' | 'error' | 'info' | 'light' | 'link' | 'neutral' | 'primary' | 'primaryDark' | 'product' | 'quaternary' | 'secondary' | 'success' | 'tertiary' | 'warning';
}
export interface DefaultThemeProps extends DefaultTheme {
    borderRadius: string;
    colors: {
        light: {
            100?: string;
            200?: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        dark: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        neutral: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lightest: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        primary: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lightest: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        secondary: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        tertiary: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lightest: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        quaternary: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        success: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        info: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        warning: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        danger: {
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            lighter: string;
            light: string;
            base: string;
            dark: string;
            darker: string;
        };
        logo: {
            primary: string;
            secondary: string;
        };
        print: {
            base: string;
            light: string;
        };
        lightAlternate: string;
        blue: string;
        darkGreyBlue: string;
        paleGrey: string;
        sunYellow: string;
        terracota: string;
        darkTerracota: string;
        yellowGreen: string;
    };
    control: any;
    font: any;
    spacing: {
        [key: string]: string;
    };
}
declare const theme: DefaultThemeProps;
export declare const lineHeight: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
};
export declare const transition: {
    timing: {
        base: string;
        fast: string;
    };
    easing: {
        base: string;
    };
};
export declare const gutter: {
    size: {
        xxxl: number;
        xxl: number;
        xl: number;
        l: number;
        m: number;
    };
};
export declare const container: {
    size: {
        m: number;
    };
};
export declare const header: {
    height: {
        base: number;
        small: number;
    };
};
export declare const breakpoint: {
    smartphone: number;
    tablet: number;
    desktop: number;
    bigDesktop: number;
    ultraWide: number;
    mainNav: number;
};
/**
 * mqUp
 *
 * @param {number} size
 * @returns {string}
 */
export declare const mediaQueryMin: (size: number) => string;
/**
 * mqDown
 *
 * @param {number} size
 * @returns {string}
 */
export declare const mediaQueryMax: (size: number) => string;
export declare const boxShadow: {
    alternate: string;
    base: string;
    big: string;
};
export default theme;
export { colors, control, font, radius, spacing };
