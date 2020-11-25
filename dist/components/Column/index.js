"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ColumnEl = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Column = ({ children, className }) => (react_1.default.createElement(ColumnEl, { className: className }, children));
exports.default = Column;
