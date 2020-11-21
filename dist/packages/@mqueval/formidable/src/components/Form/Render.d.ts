import React, { ReactNode } from 'react';
import { DataProps } from '../Data';
interface FormProps {
    bodyClassName?: string;
    children?: ReactNode;
    className?: string;
    datas?: DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    errorValues?: any;
    forceUnregisterOnUnmount?: boolean;
    formValues?: any;
    footerClassName?: string;
    name: string;
    submitLabel?: string;
}
declare const _default: import("react-redux").ConnectedComponent<import("redux-form").DecoratedComponentClass<any, import("redux-form").DecoratedFormProps<any, FormProps, string>>, Pick<React.ClassAttributes<import("redux-form").FormInstance<any, import("redux-form").DecoratedFormProps<any, FormProps, string>>> & FormProps & Partial<import("redux-form").ConfigProps<any, FormProps, string>> & Partial<import("redux-form").DecoratedFormState<any, string>> & Partial<import("redux-form").DecoratedFormActions<string>> & {
    _reduxForm?: import("redux-form").WrappedReduxFormContext | undefined;
}, "validate" | "name" | "className" | "datas" | "children" | "ref" | "onChange" | "array" | "valid" | "fields" | "key" | "onSubmit" | "error" | "values" | "submit" | "reset" | "warning" | "asyncBlurFields" | "asyncChangeFields" | "asyncValidate" | "getFormState" | "immutableProps" | "initialValues" | "keepDirtyOnReinitialize" | "updateUnregisteredFields" | "keepValues" | "onSubmitFail" | "onSubmitSuccess" | "propNamespace" | "pure" | "shouldValidate" | "shouldError" | "shouldWarn" | "shouldAsyncValidate" | "submitAsSideEffect" | "touchOnBlur" | "touchOnChange" | "persistentSubmitErrors" | "warn" | "registeredFields" | "active" | "anyTouched" | "submitting" | "submitErrors" | "submitFailed" | "asyncErrors" | "asyncValidating" | "dirty" | "initialized" | "invalid" | "pristine" | "submitSucceeded" | "syncErrors" | "syncWarnings" | "triggerSubmit" | "validExceptSubmit" | "arrayInsert" | "arrayMove" | "arrayPop" | "arrayPush" | "arrayRemove" | "arrayRemoveAll" | "arrayShift" | "arraySplice" | "arraySwap" | "arrayUnshift" | "autofill" | "clearSubmit" | "clearSubmitErrors" | "clearAsyncError" | "clearFields" | "destroy" | "initialize" | "registerField" | "resetSection" | "startAsyncValidation" | "startSubmit" | "stopAsyncValidation" | "stopSubmit" | "setSubmitFailed" | "setSubmitSucceeded" | "touch" | "unregisterField" | "untouch" | "updateSyncErrors" | "updateSyncWarnings" | "blur" | "change" | "focus" | "bodyClassName" | "errorValues" | "formValues" | "footerClassName" | "submitLabel" | "_reduxForm"> & FormProps>;
export default _default;
