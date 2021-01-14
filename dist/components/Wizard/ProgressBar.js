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
const object_hash_1 = __importDefault(require("object-hash"));
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const ProgressBarSC = styled_components_1.default.ul `
  display: table;
  width: 100%;
  table-layout: fixed;
  position: relative;
  padding-bottom: 3rem;
`;
const ProgressBarItemSC = styled_components_1.default.li `
  display: table-cell;
  text-align: center;
  vertical-align: top;
  overflow: visible;
  position: relative;
  font-weight: bold;

  &:not(:last-child):before {
    content: '';
    display: block;
    position: absolute;
    left: 60%;
    background-color: ${props => props.inProgress || props.isCompleted ? '#112255' : '#e7e9ee'};
    height: 4px;
    width: 80%;
    border-radius: 4px;
  }

  ${props => props.isCompleted &&
    styled_components_1.css `
      &:before {
        background-color: #112255;
      }
    `};

  ${props => props.inProgress &&
    styled_components_1.css `
      &:before {
        background: #112255;
        background: linear-gradient(
          to right,
          #112255 0%,
          #112255 50%,
          #e7e9ee 50%
        );
      }
    `};

  > button {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: -13px;
    color: ${props => props.inProgress || props.isCompleted ? '#112255' : '#e7e9ee'};
    margin-left: -15px;
    outline: none;
  }
`;
const ProgressBarItemIconSC = styled_components_1.default.span `
  display: flex;
  border: 2px solid ${props => (props.inProgress ? '#112255' : '#e7e9ee')};
  border-radius: 30px;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.375rem;
  color: ${props => props.inProgress || props.isCompleted ? '#112255' : '#e7e9ee'};
  font-weight: 600;

  ${props => props.isCompleted &&
    styled_components_1.css `
      border: none;
      background: #112255;
      color: #fff;
    `};
`;
const ProgressBarItemStepSC = styled_components_1.default.span `
  color: #e7e9ee;
`;
const ProgressBarItemTitleSC = styled_components_1.default.span `
  font-weight: 600;
  position: relative;
  left: calc(-50% + 15px);
  color: inherit;
`;
const ProgressBar = ({ handleStepButtonOnClick, iconStep, iconSuccess, infos, page, pages, className, itemClassName, itemIconClassName, showStep, }) => {
    const IconStep = iconStep;
    const IconSuccess = iconSuccess;
    return (react_1.default.createElement(ProgressBarSC, { className: className }, infos.map((info, i) => (react_1.default.createElement(ProgressBarItemSC, Object.assign({ key: `${object_hash_1.default({ ...infos[i], i })}`, className: itemClassName }, info, { isCompleted: i < page }),
        react_1.default.createElement("button", { "data-page": i, onClick: handleStepButtonOnClick, type: "button" },
            react_1.default.createElement(ProgressBarItemIconSC, Object.assign({ "aria-label": `step ${i + 1}`, className: itemIconClassName }, info, { isCompleted: i < page }),
                i < page && IconSuccess && react_1.default.createElement(IconSuccess, { size: 16 }),
                i >= page && showStep && IconStep && react_1.default.createElement(IconStep, { size: 12 }),
                i >= page && (!showStep || !IconStep) && react_1.default.createElement("span", null, i + 1)),
            showStep && (react_1.default.createElement(ProgressBarItemStepSC, null, `step ${i + 1}`)),
            react_1.default.createElement(ProgressBarItemTitleSC, null, pages[i].title)))))));
};
exports.default = ProgressBar;
