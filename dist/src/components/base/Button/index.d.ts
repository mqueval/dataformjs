/// <reference types="react" />
import PropTypes from 'prop-types';
declare type ButtonProps = {
    children: any;
    className?: string;
    datas?: any;
    disabled?: boolean;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    large?: boolean;
    loading?: boolean;
    name: string;
    onClick?: any;
    size?: string;
    square?: boolean;
    target?: string;
    theme: string;
    to?: string;
    type: string;
    value: string;
};
/**
 * Button
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {object} props.datas
 * @param {boolean} props.disabled
 * @param {React.ReactElement} props.iconLeft
 * @param {React.ReactElement} props.iconRight
 * @param {boolean} props.large
 * @param {boolean} props.loading
 * @param {Function} props.onClick
 * @param {string} props.size
 * @param {boolean} props.square
 * @param {string} props.theme
 * @param {string} props.to
 * @param {string} props.value
 *
 * @returns {React.ReactNode}
 */
declare const Button: {
    ({ children, className, datas, disabled, iconLeft, iconRight, large, loading, onClick, size, square, theme, to, value, }: ButtonProps): JSX.Element;
    defaultProps: {
        children: null;
        className: null;
        datas: null;
        disabled: boolean;
        iconLeft: null;
        iconRight: null;
        large: boolean;
        loading: boolean;
        name: null;
        onClick: null;
        size: string;
        square: boolean;
        target: null;
        theme: null;
        to: null;
        type: null;
        value: null;
    };
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        iconLeft: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        iconRight: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        large: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        name: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        size: PropTypes.Requireable<string>;
        square: PropTypes.Requireable<boolean>;
        target: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<string>;
        to: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string>;
    };
};
export default Button;
