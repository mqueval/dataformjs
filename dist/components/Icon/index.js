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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const index_1 = require("../../index");
const Icon = ({ color, value }) => {
    const { t, sc } = react_1.useContext(index_1.FormidableContext);
    if (typeof react_1.default.Component === typeof value) {
        const IconCmp = value;
        return react_1.default.createElement(IconCmp, { color: color });
    }
    let IconCmp;
    switch (value) {
        case 'add': {
            if (sc && sc.iconAdd) {
                const IconAdd = sc.iconAdd;
                return react_1.default.createElement(IconAdd, { color: color });
            }
            IconCmp = t ? t('add') : 'add';
            break;
        }
        case 'back': {
            if (sc && sc.iconBack) {
                const IconBack = sc.iconBack;
                return react_1.default.createElement(IconBack, { color: color });
            }
            IconCmp = t ? t('back') : 'back';
            break;
        }
        case 'next': {
            if (sc && sc.iconNext) {
                const IconNext = sc.iconNext;
                return react_1.default.createElement(IconNext, null);
            }
            IconCmp = t ? t('next') : 'next';
            break;
        }
        case 'remove': {
            if (sc && sc.iconRemove) {
                const IconRemove = sc.iconRemove;
                return react_1.default.createElement(IconRemove, null);
            }
            IconCmp = t ? t('remove') : 'remove';
            break;
        }
        default:
    }
    return react_1.default.createElement("div", null, IconCmp);
};
exports.default = Icon;
