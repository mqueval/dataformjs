"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnsEl = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    margin-right: 1.5rem;
  }

  > div:last-child {
    margin-right: 0;
  }
`;
const Columns = ({ children, className }) => (react_1.default.createElement(ColumnsEl, { className: className }, children));
exports.default = Columns;
