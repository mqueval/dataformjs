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
exports.FormidableProvider = exports.FormidableContext = exports.Grid = exports.Column = exports.isRequired = exports.isEmail = exports.addValidator = exports.initializeValues = exports.Form = exports.DataField = exports.DataArray = exports.Data = exports.print = exports.FormSection = exports.reduxForm = exports.SubmissionError = exports.formValueSelector = exports.FieldArray = exports.Field = exports.change = exports.useStore = exports.useSelector = exports.useDispatch = exports.connect = void 0;
const FormidableContext_1 = __importStar(require("./FormidableContext"));
exports.FormidableContext = FormidableContext_1.default;
Object.defineProperty(exports, "FormidableProvider", { enumerable: true, get: function () { return FormidableContext_1.FormidableProvider; } });
var react_redux_1 = require("react-redux");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return react_redux_1.connect; } });
Object.defineProperty(exports, "useDispatch", { enumerable: true, get: function () { return react_redux_1.useDispatch; } });
Object.defineProperty(exports, "useSelector", { enumerable: true, get: function () { return react_redux_1.useSelector; } });
Object.defineProperty(exports, "useStore", { enumerable: true, get: function () { return react_redux_1.useStore; } });
var redux_form_1 = require("redux-form");
Object.defineProperty(exports, "change", { enumerable: true, get: function () { return redux_form_1.change; } });
Object.defineProperty(exports, "Field", { enumerable: true, get: function () { return redux_form_1.Field; } });
Object.defineProperty(exports, "FieldArray", { enumerable: true, get: function () { return redux_form_1.FieldArray; } });
Object.defineProperty(exports, "formValueSelector", { enumerable: true, get: function () { return redux_form_1.formValueSelector; } });
Object.defineProperty(exports, "SubmissionError", { enumerable: true, get: function () { return redux_form_1.SubmissionError; } });
Object.defineProperty(exports, "reduxForm", { enumerable: true, get: function () { return redux_form_1.reduxForm; } });
Object.defineProperty(exports, "FormSection", { enumerable: true, get: function () { return redux_form_1.FormSection; } });
const print = () => {
    console.info('Bonjour tout le monde !! La vie est formidable !!');
};
exports.print = print;
var Data_1 = require("./components/Data");
Object.defineProperty(exports, "Data", { enumerable: true, get: function () { return __importDefault(Data_1).default; } });
Object.defineProperty(exports, "DataArray", { enumerable: true, get: function () { return Data_1.DataArray; } });
var Field_1 = require("./components/Data/Field");
Object.defineProperty(exports, "DataField", { enumerable: true, get: function () { return __importDefault(Field_1).default; } });
var Form_1 = require("./components/Form");
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return __importDefault(Form_1).default; } });
var initializeValues_1 = require("./utils/initializeValues");
Object.defineProperty(exports, "initializeValues", { enumerable: true, get: function () { return __importDefault(initializeValues_1).default; } });
var validators_1 = require("./utils/validators");
Object.defineProperty(exports, "addValidator", { enumerable: true, get: function () { return validators_1.addValidator; } });
Object.defineProperty(exports, "isEmail", { enumerable: true, get: function () { return validators_1.isEmail; } });
Object.defineProperty(exports, "isRequired", { enumerable: true, get: function () { return validators_1.isRequired; } });
var Column_1 = require("./components/Column");
Object.defineProperty(exports, "Column", { enumerable: true, get: function () { return __importDefault(Column_1).default; } });
var Grid_1 = require("./components/Grid");
Object.defineProperty(exports, "Grid", { enumerable: true, get: function () { return __importDefault(Grid_1).default; } });
