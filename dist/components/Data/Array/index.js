"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var redux_form_1 = require("redux-form");
var Group_1 = __importDefault(require("../../Group"));
var Render_1 = __importDefault(require("./Render"));
var DataArray = function (_a) {
    var group = _a.group, groupClassName = _a.groupClassName, name = _a.name, others = __rest(_a, ["group", "groupClassName", "name"]);
    if (group) {
        return (react_1.default.createElement(Group_1.default, { className: groupClassName },
            react_1.default.createElement(redux_form_1.FieldArray, { component: Render_1.default, name: name, props: others })));
    }
    return react_1.default.createElement(redux_form_1.FieldArray, { component: Render_1.default, name: name, props: others });
};
exports.default = DataArray;
