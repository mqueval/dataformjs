"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnSC = styled_components_1.default.div `
  align-self: auto;
  display: flex;
  flex-direction: column;
  order: 0;
  width: 100%;

  padding: ${props => `${props.theme.spacing &&
    (props.spacingY
        ? props.theme.spacing[props.spacingY]
        : props.theme.spacing.xs)} ${props.theme.spacing &&
    (props.spacingX
        ? props.theme.spacing[props.spacingX]
        : props.theme.spacing.xs)}`};
`;
const Column = ({ children, className, spacingX, spacingY }) => (react_1.default.createElement(ColumnSC, { className: className, spacingX: spacingX, spacingY: spacingY }, children));
exports.default = Column;
