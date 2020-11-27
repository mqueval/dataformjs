import React, { ReactNode, SyntheticEvent } from 'react';
import { DataProps } from '../Data';
interface FormRenderProps {
    bodyClassName?: string;
    cancelLabel?: string;
    cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    className?: string;
    datas?: DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    errorValues?: any;
    forceUnregisterOnUnmount?: boolean;
    formValues?: any;
    footerClassName?: string;
    id?: string;
    name: string;
    submitLabel?: string;
}
declare const _default: import("react-redux").ConnectedComponent<import("redux-form").DecoratedComponentClass<any, import("redux-form").DecoratedFormProps<any, FormRenderProps, string>>, Pick<React.ClassAttributes<import("redux-form").FormInstance<any, import("redux-form").DecoratedFormProps<any, FormRenderProps, string>>> & FormRenderProps & Partial<import("redux-form").ConfigProps<any, FormRenderProps, string>> & Partial<import("redux-form").DecoratedFormState<any, string>> & Partial<import("redux-form").DecoratedFormActions<string>> & {
    _reduxForm?: import("redux-form").WrappedReduxFormContext | undefined;
}, "children" | "ref" | "id" | "error" | "name" | "validate" | "className" | "datas" | "formValues" | "onChange" | "key" | "onSubmit" | "values" | "submit" | "reset" | "warning" | "asyncBlurFields" | "asyncChangeFields" | "asyncValidate" | "getFormState" | "immutableProps" | "initialValues" | "keepDirtyOnReinitialize" | "updateUnregisteredFields" | "keepValues" | "onSubmitFail" | "onSubmitSuccess" | "propNamespace" | "pure" | "shouldValidate" | "shouldError" | "shouldWarn" | "shouldAsyncValidate" | "submitAsSideEffect" | "touchOnBlur" | "touchOnChange" | "persistentSubmitErrors" | "warn" | "registeredFields" | "fields" | "active" | "anyTouched" | "submitting" | "submitErrors" | "submitFailed" | "asyncErrors" | "asyncValidating" | "dirty" | "initialized" | "invalid" | "pristine" | "submitSucceeded" | "syncErrors" | "syncWarnings" | "triggerSubmit" | "valid" | "validExceptSubmit" | "arrayInsert" | "arrayMove" | "arrayPop" | "arrayPush" | "arrayRemove" | "arrayRemoveAll" | "arrayShift" | "arraySplice" | "arraySwap" | "arrayUnshift" | "autofill" | "clearSubmit" | "clearSubmitErrors" | "clearAsyncError" | "clearFields" | "destroy" | "initialize" | "registerField" | "resetSection" | "startAsyncValidation" | "startSubmit" | "stopAsyncValidation" | "stopSubmit" | "setSubmitFailed" | "setSubmitSucceeded" | "touch" | "unregisterField" | "untouch" | "updateSyncErrors" | "updateSyncWarnings" | "blur" | "change" | "focus" | "array" | "bodyClassName" | "cancelLabel" | "cancelOnClick" | "errorValues" | "footerClassName" | "submitLabel" | "_reduxForm"> & FormRenderProps>;
export default _default;
