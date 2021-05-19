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
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const redux_form_1 = require("redux-form");
const styled_components_1 = __importDefault(require("styled-components"));
const index_1 = require("../../index");
const ButtonSC = styled_components_1.default.button ``;
const FormSC = styled_components_1.default.form ``;
const FormBodySC = styled_components_1.default.div ``;
const FormFooterSC = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
`;
const MessageSC = styled_components_1.default.div ``;
const Actions = ({ id, values }) => {
    const { sc } = react_1.useContext(index_1.FormidableContext);
    if (!values) {
        return null;
    }
    const tmp = Array.isArray(values)
        ? values
        : [values];
    return (react_1.default.createElement(react_1.default.Fragment, null, tmp.map((a) => {
        if (a.actions) {
            const div = a;
            return (react_1.default.createElement("div", { className: div.className }, div.actions.map(({ label, ...actionProps }, i) => (react_1.default.createElement(ButtonSC, Object.assign({ key: object_hash_1.default({ id, label, index: i }), as: sc && sc.button }, actionProps), label)))));
        }
        return (Array.isArray(a) ? a : [a]).map(({ label, ...actionProps }, i) => (react_1.default.createElement(ButtonSC, Object.assign({ key: object_hash_1.default({ id, label, index: i }), as: sc && sc.button }, actionProps), label)));
    })));
};
const Form = props => {
    const { actions, bodyProps, cancelProps, children, className, error, 
    // errorValues,
    footerProps, 
    // formValues,
    handleSubmit, hideSubmitButton = false, id, isSubmissive = true, 
    // invalid,
    name, pristine, submitProps, submitting, } = props;
    const { sc, t } = react_1.useContext(index_1.FormidableContext);
    return (react_1.default.createElement(FormSC, { as: sc && sc.form, className: className, id: id, name: `${name}-form`, onSubmit: handleSubmit },
        react_1.default.createElement(FormBodySC, Object.assign({}, bodyProps),
            children,
            error && (react_1.default.createElement(MessageSC, { as: sc && sc.fieldMessage, status: "error" }, t ? t(error) : error))),
        react_1.default.createElement(FormFooterSC, Object.assign({}, footerProps),
            react_1.default.createElement(Actions, { id: id, values: actions }),
            (cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.onClick) && (react_1.default.createElement(ButtonSC, Object.assign({ as: sc && sc.button }, cancelProps), t
                ? t((cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.label) || 'cancel')
                : (cancelProps === null || cancelProps === void 0 ? void 0 : cancelProps.label) || 'cancel')),
            !hideSubmitButton && (react_1.default.createElement(ButtonSC, Object.assign({ as: sc && sc.button }, submitProps, { disabled: 
                // !isSubmissive || invalid || pristine || submitting || !valid
                !isSubmissive || pristine || submitting, type: "submit" }), ((submitProps === null || submitProps === void 0 ? void 0 : submitProps.label) ||
                (!(submitProps === null || submitProps === void 0 ? void 0 : submitProps.iconLeft) && !(submitProps === null || submitProps === void 0 ? void 0 : submitProps.iconRight))) &&
                (t
                    ? t((submitProps === null || submitProps === void 0 ? void 0 : submitProps.label) || 'submit')
                    : (submitProps === null || submitProps === void 0 ? void 0 : submitProps.label) || 'submit'))))));
};
const ReduxForm = redux_form_1.reduxForm({})(Form);
const mapStateToProps = (state, props) => ({
    asyncChangeFields: props.asyncChangeFields,
    asyncValidate: props.asyncValidate,
    destroyOnUnmount: undefined !== props.destroyOnUnmount ? props.destroyOnUnmount : true,
    enableReinitialize: !!props.enableReinitialize,
    forceUnregisterOnUnmount: !!props.forceUnregisterOnUnmount,
    form: props.name,
    touchOnChange: undefined !== props.touchOnChange ? props.touchOnChange : false,
});
exports.default = react_redux_1.connect(mapStateToProps)(ReduxForm);
