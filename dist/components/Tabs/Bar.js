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
const classnames_1 = __importDefault(require("classnames"));
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../index");
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
const TabsBar = ({ handleButtonOnClick, infos, itemClassName, ...props }) => {
    const { sc } = react_1.useContext(index_1.FormidableContext);
    return (react_1.default.createElement(TabsBarSC, Object.assign({ as: sc && sc.tabsBar }, props), infos.map(info => (react_1.default.createElement(TabsBarItemSC, Object.assign({ key: `${object_hash_1.default({ ...info })}`, as: sc && sc.tabsBarItem, className: classnames_1.default(itemClassName, {
            'is-active': info.isActive,
        }) }, info),
        react_1.default.createElement("button", { "data-tab": info.index, onClick: handleButtonOnClick, type: "button" },
            react_1.default.createElement(ItemTitleSC, { as: sc && sc.tabsBarItemTitle }, info.title)))))));
};
exports.default = TabsBar;
