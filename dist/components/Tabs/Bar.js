"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const TabsBarSC = styled_components_1.default.ul `
  display: flex;
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 1.5rem;
`;
const TabsBarItemSC = styled_components_1.default.li `
  font-weight: ${props => (props.isActive ? 600 : 400)};
  margin: 0.375rem 0.75rem;

  button {
    outline: none;
  }
`;
const ItemTitleSC = styled_components_1.default.span ``;
const TabsBar = ({ handleButtonOnClick, infos, className, itemClassName, }) => (react_1.default.createElement(TabsBarSC, { className: className }, infos.map((info, i) => (react_1.default.createElement(TabsBarItemSC, Object.assign({ key: `${object_hash_1.default({ ...infos[i], i })}`, className: itemClassName }, info),
    react_1.default.createElement("button", { "data-tab": info.index, onClick: handleButtonOnClick, type: "button" },
        react_1.default.createElement(ItemTitleSC, null, infos[i].title)))))));
exports.default = TabsBar;
