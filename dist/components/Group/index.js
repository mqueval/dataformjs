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
const convertParams_1 = __importDefault(require("../../utils/convertParams"));
const Columns_1 = __importDefault(require("../Columns"));
const Grid_1 = __importDefault(require("../Grid"));
const GroupSC = styled_components_1.default.fieldset ``;
const GroupDescriptionSC = styled_components_1.default.p ``;
const LegendSC = styled_components_1.default.legend ``;
const Group = ({ children, className, columns, customInfos, customInfosClassName, datasClassName, description, descriptionClassName, grid, params, title, titleAs, titleClassName, titleParams, }) => {
    const { t, sc } = react_1.useContext(index_1.FormidableContext);
    return (react_1.default.createElement(GroupSC, { as: sc && sc.group, className: className },
        customInfos && react_1.default.createElement("div", { className: customInfosClassName }, customInfos),
        title && (react_1.default.createElement(LegendSC, { as: titleAs, className: titleClassName }, t ? t(title, convertParams_1.default(titleParams, params)) : title)),
        description && (react_1.default.createElement(GroupDescriptionSC, { as: sc && sc.groupDescription, className: descriptionClassName }, t ? t(description) : description)),
        columns && react_1.default.createElement(Columns_1.default, { className: datasClassName }, children),
        grid && react_1.default.createElement(Grid_1.default, { className: datasClassName }, children),
        !columns && !grid && react_1.default.createElement("div", { className: datasClassName }, children)));
};
exports.default = Group;
