"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const GridSC = styled_components_1.default.div `
  display: grid;
  column-gap: 1.5rem;
`;
const Grid = ({ children, className }) => (
// const childrenWithProps = React.Children.map(children, child => {
//   if (React.isValidElement(child)) {
//     return React.cloneElement(child, { spacingX, spacingY });
//   }
//
//   return child;
// });
react_1.default.createElement(GridSC, { className: className }, children));
exports.default = Grid;
