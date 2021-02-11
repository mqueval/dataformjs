"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnsSC = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  > * + * {
    margin-left: 1.5rem;
  }
`;
const Columns = ({ children, className }) => (react_1.default.createElement(ColumnsSC, { className: className }, children));
exports.default = Columns;
