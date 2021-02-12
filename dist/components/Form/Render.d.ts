import React, { ReactNode } from 'react';
import { DecoratedFormProps } from 'redux-form';
import { FormProps } from './index';
interface FormRenderProps extends FormProps {
    children?: ReactNode;
    errorValues?: any;
    formValues?: any;
}
declare const _default: import("react-redux").ConnectedComponent<import("redux-form").DecoratedComponentClass<any, DecoratedFormProps<any, FormRenderProps, string>>, Pick<React.ClassAttributes<import("redux-form").FormInstance<any, DecoratedFormProps<any, FormRenderProps, string>>> & FormRenderProps & Partial<import("redux-form").ConfigProps<any, FormRenderProps, string>> & Partial<import("redux-form").DecoratedFormState<any, string>> & Partial<import("redux-form").DecoratedFormActions<string>> & {
    _reduxForm?: import("redux-form").WrappedReduxFormContext | undefined;
}, "title" | "id" | "error" | "name" | "params" | "validate" | "actions" | "className" | "datas" | "formValues" | "children" | "ref" | "onChange" | "key" | "onSubmit" | "warning" | "array" | "submit" | "reset" | "fields" | "warn" | "asyncBlurFields" | "getFormState" | "immutableProps" | "initialValues" | "keepDirtyOnReinitialize" | "updateUnregisteredFields" | "keepValues" | "onSubmitFail" | "onSubmitSuccess" | "propNamespace" | "pure" | "shouldValidate" | "shouldError" | "shouldWarn" | "shouldAsyncValidate" | "submitAsSideEffect" | "touchOnBlur" | "persistentSubmitErrors" | "registeredFields" | "values" | "active" | "anyTouched" | "submitting" | "submitErrors" | "submitFailed" | "asyncErrors" | "asyncValidating" | "dirty" | "initialized" | "invalid" | "pristine" | "submitSucceeded" | "syncErrors" | "syncWarnings" | "triggerSubmit" | "valid" | "validExceptSubmit" | "arrayInsert" | "arrayMove" | "arrayPop" | "arrayPush" | "arrayRemove" | "arrayRemoveAll" | "arrayShift" | "arraySplice" | "arraySwap" | "arrayUnshift" | "autofill" | "clearSubmit" | "clearSubmitErrors" | "clearAsyncError" | "clearFields" | "destroy" | "initialize" | "registerField" | "resetSection" | "startAsyncValidation" | "startSubmit" | "stopAsyncValidation" | "stopSubmit" | "setSubmitFailed" | "setSubmitSucceeded" | "touch" | "unregisterField" | "untouch" | "updateSyncErrors" | "updateSyncWarnings" | "blur" | "change" | "focus" | "errorValues" | "bodyClassName" | "cancelClassName" | "cancelIcon" | "cancelIconColor" | "cancelLabel" | "cancelOnClick" | "cancelStatus" | "footerClassName" | "hideSubmitButton" | "isSubmissive" | "submitClassName" | "submitIcon" | "submitIconLeft" | "submitIconRight" | "submitLabel" | "_reduxForm"> & FormRenderProps>;
export default _default;
