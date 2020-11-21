/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * Link
 *
 * @param {object} props
 * @param {any} props.children
 * @param {string} props.to
 * @param {string} props.className
 * @param {boolean} props.partiallyActive
 * @param {string} props.title
 * @returns {React.ReactNode}
 */
declare const Link: {
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
        className: PropTypes.Requireable<string>;
        partiallyActive: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<string>;
        to: PropTypes.Validator<string>;
    };
};
export default Link;
