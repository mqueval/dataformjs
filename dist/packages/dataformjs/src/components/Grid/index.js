"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const GridSC = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;
  margin: ${props => {
    console.info('props Grid SC', props);
    return `-${props.spacingY || (props.theme.spacing && props.theme.spacing.xs)} -${props.spacingX || (props.theme.spacing && props.theme.spacing.xs)}`;
}};
`;
const Grid = ({ children, className, spacingX, spacingY }) => {
    const childrenWithProps = react_1.default.Children.map(children, child => {
        if (react_1.default.isValidElement(child)) {
            return react_1.default.cloneElement(child, { spacingX, spacingY });
        }
        return child;
    });
    return (react_1.default.createElement(GridSC, { className: className, spacingX: spacingX, spacingY: spacingY }, childrenWithProps));
};
exports.default = Grid;
