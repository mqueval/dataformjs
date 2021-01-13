"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_form_1 = require("redux-form");
const Group_1 = __importDefault(require("../../Group"));
const Render_1 = __importDefault(require("./Render"));
const DataArray = ({ group, groupTitle, groupClassName, name, ...others }) => {
    if (group) {
        return (react_1.default.createElement(Group_1.default, { className: groupClassName, title: groupTitle },
            react_1.default.createElement(redux_form_1.FieldArray, { component: Render_1.default, name: name, props: others })));
    }
    return react_1.default.createElement(redux_form_1.FieldArray, { component: Render_1.default, name: name, props: others });
};
exports.default = DataArray;
