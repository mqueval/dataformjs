import React, { ReactNode } from 'react';
import { DecoratedFormProps } from 'redux-form';
import { FormProps } from './index';
interface FormRenderProps extends FormProps {
    children?: ReactNode;
    errorValues?: any;
    formValues?: any;
}
declare const _default: import("react-redux").ConnectedComponent<import("redux-form").DecoratedComponentClass<any, DecoratedFormProps<any, FormRenderProps, string>>, import("react-redux").Omit<React.ClassAttributes<import("redux-form").FormInstance<any, DecoratedFormProps<any, FormRenderProps, string>>> & FormRenderProps & Partial<import("redux-form").ConfigProps<any, FormRenderProps, string>> & Partial<import("redux-form").DecoratedFormState<any, string>> & Partial<import("redux-form").DecoratedFormActions<string>> & {
    _reduxForm?: import("redux-form").WrappedReduxFormContext | undefined;
}, "form" | "asyncChangeFields" | "asyncValidate" | "destroyOnUnmount" | "enableReinitialize" | "forceUnregisterOnUnmount" | "keepDirtyOnReinitialize" | "updateUnregisteredFields" | "touchOnChange" | "dispatch"> & FormRenderProps>;
export default _default;
