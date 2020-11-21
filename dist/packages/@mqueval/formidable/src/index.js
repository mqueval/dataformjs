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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormidableProvider = exports.FormidableContext = exports.print = void 0;
var FormidableContext_1 = __importStar(require("./FormidableContext"));
exports.FormidableContext = FormidableContext_1.default;
Object.defineProperty(exports, "FormidableProvider", { enumerable: true, get: function () { return FormidableContext_1.FormidableProvider; } });
exports.print = function () {
    console.info('Bonjour tout le monde !! La vie est formidable !!');
};
var Form_1 = require("./components/Form");
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return Form_1.default; } });
var Field_1 = require("./components/Data/Field");
Object.defineProperty(exports, "Field", { enumerable: true, get: function () { return Field_1.default; } });
var initializeValues_1 = require("./utils/initializeValues");
Object.defineProperty(exports, "initializeValues", { enumerable: true, get: function () { return initializeValues_1.default; } });
