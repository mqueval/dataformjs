declare const control: {
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
                lightest: string;
                lighter: string;
                light: string;
                base: string;
                dark: string;
                darker: string;
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
export default control;
