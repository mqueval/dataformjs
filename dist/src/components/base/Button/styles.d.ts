/// <reference types="react" />
export declare const ButtonText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const IsLoading: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type ButtonProps = {
    disabled?: boolean;
    large?: boolean;
    theme: string;
    size?: string;
    square?: boolean;
    to: string;
};
export declare const ButtonSC: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare const LinkEl: import("styled-components").StyledComponent<"button", any, ButtonProps & {
    as: {
        ({ children, className, partiallyActive, title, to, }: {
            children: any;
            className: string;
            partiallyActive: boolean;
            title: string;
            to: string;
        }): JSX.Element;
        defaultProps: {
            className: null;
            partiallyActive: boolean;
            title: null;
        };
        propTypes: {
            className: import("prop-types").Requireable<string>;
            partiallyActive: import("prop-types").Requireable<boolean>;
            title: import("prop-types").Requireable<string>;
            to: import("prop-types").Validator<string>;
        };
    };
}, "as">;
export {};
