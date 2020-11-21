/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * Loading
 *
 * @param {object} props
 * @param {string} props.color
 * @param {number} props.size
 * @returns {React.ReactNode}
 */
declare const IconLoading: {
    ({ color, size, }: {
        color: string;
        size: number;
    }): JSX.Element;
    defaultProps: {
        color: null;
        size: number;
    };
    propTypes: {
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<number>;
    };
};
export default IconLoading;
