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
const FormidableContext_1 = __importStar(require("./FormidableContext"));
exports.FormidableContext = FormidableContext_1.default;
Object.defineProperty(exports, "FormidableProvider", { enumerable: true, get: function () { return FormidableContext_1.FormidableProvider; } });
var react_redux_1 = require("react-redux");
Object.defineProperty(exports, "useDispatch", { enumerable: true, get: function () { return react_redux_1.useDispatch; } });
Object.defineProperty(exports, "useSelector", { enumerable: true, get: function () { return react_redux_1.useSelector; } });
var redux_form_1 = require("redux-form");
Object.defineProperty(exports, "change", { enumerable: true, get: function () { return redux_form_1.change; } });
Object.defineProperty(exports, "Field", { enumerable: true, get: function () { return redux_form_1.Field; } });
Object.defineProperty(exports, "SubmissionError", { enumerable: true, get: function () { return redux_form_1.SubmissionError; } });
exports.print = () => {
    console.info('Bonjour tout le monde !! La vie est formidable !!');
};
var Data_1 = require("./components/Data");
Object.defineProperty(exports, "Data", { enumerable: true, get: function () { return Data_1.default; } });
var Field_1 = require("./components/Data/Field");
Object.defineProperty(exports, "DataField", { enumerable: true, get: function () { return Field_1.default; } });
var Form_1 = require("./components/Form");
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return Form_1.default; } });
var initializeValues_1 = require("./utils/initializeValues");
Object.defineProperty(exports, "initializeValues", { enumerable: true, get: function () { return initializeValues_1.default; } });
var validators_1 = require("./utils/validators");
Object.defineProperty(exports, "addValidator", { enumerable: true, get: function () { return validators_1.addValidator; } });
Object.defineProperty(exports, "isEmail", { enumerable: true, get: function () { return validators_1.isEmail; } });
Object.defineProperty(exports, "isRequired", { enumerable: true, get: function () { return validators_1.isRequired; } });
