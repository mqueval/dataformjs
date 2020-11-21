"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var redux_form_1 = require("redux-form");
var styled_components_1 = __importDefault(require("styled-components"));
var index_1 = require("../../index");
var Button_1 = __importDefault(require("../Button"));
var FormSC = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var FormBodySC = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var FormFooterSC = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var MessageSC = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var Form = function (props) {
    var bodyClassName = props.bodyClassName, children = props.children, className = props.className, error = props.error, 
    // errorValues,
    footerClassName = props.footerClassName, handleSubmit = props.handleSubmit, invalid = props.invalid, name = props.name, pristine = props.pristine, _a = props.submitLabel, submitLabel = _a === void 0 ? 'form/submit' : _a, submitting = props.submitting, valid = props.valid;
    var t = react_1.useContext(index_1.FormidableContext).t;
    return (react_1.default.createElement(FormSC, { className: className, name: name + "-form", onSubmit: handleSubmit },
        react_1.default.createElement(FormBodySC, { className: bodyClassName },
            children,
            error && react_1.default.createElement(MessageSC, null, t ? t(error) : error)),
        react_1.default.createElement(FormFooterSC, { className: footerClassName },
            react_1.default.createElement(Button_1.default, { disabled: invalid || pristine || submitting || !valid, type: "submit" }, t ? t(submitLabel) : submitLabel))));
};
var ReduxForm = redux_form_1.reduxForm({})(Form);
var mapStateToProps = function (state, props) { return ({
    destroyOnUnmount: undefined !== props.destroyOnUnmount ? props.destroyOnUnmount : true,
    enableReinitialize: !!props.enableReinitialize,
    forceUnregisterOnUnmount: !!props.forceUnregisterOnUnmount,
    form: props.name,
}); };
exports.default = react_redux_1.connect(mapStateToProps)(ReduxForm);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
