"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnsSC = styled_components_1.default.div `
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  > * + * {
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin-left: 1.5rem;
      margin-top: 0;
    }
  }
`;
const Columns = ({ children, className }) => (react_1.default.createElement(ColumnsSC, { className: className }, children));
exports.default = Columns;
