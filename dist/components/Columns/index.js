"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../index");
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
const Columns = ({ children, ...props }) => {
    const { sc } = (0, react_1.useContext)(index_1.FormidableContext);
    return (react_1.default.createElement(ColumnsSC, { as: sc && sc.columns, ...props }, children));
};
exports.default = Columns;
