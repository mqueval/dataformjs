export declare const color: {
    light: {
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
    };
    logo: {
        primary: string;
        secondary: string;
    };
    print: {
        base: string;
        light: string;
    };
};
export declare const font: {
    family: {
        base: string;
    };
    weight: {
        base: number;
        medium: number;
        bold: number;
    };
    size: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
        xxxl: number;
    };
};
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
export declare const radius: {
    l: number;
    m: number;
    s: number;
    xs: number;
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
export declare const spacer: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    xxxl: number;
};
export declare const input: {
    border: {
        color: {
            base: string;
            hover: string;
        };
        size: {
            base: number;
        };
        type: string;
    };
    icon: {
        color: {
            base: {
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
        };
        size: {
            base: number;
        };
    };
    size: {
        height: {
            base: string;
        };
    };
    padding: {
        x: {
            base: string;
            small: string;
            icon: string;
            iconSmall: string;
        };
        y: {
            base: number;
            small: number;
        };
    };
    radius: {
        base: string;
    };
};
