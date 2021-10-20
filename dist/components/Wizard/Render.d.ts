import React, { ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';
import { DataProps } from '../Data';
interface FormRenderProps {
    asyncValidate?: (values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, any>, blurredField: string) => Promise<any>;
    asyncChangeFields?: string[];
    bodyClassName?: string;
    cancelIcon?: ReactNode;
    cancelLabel?: string;
    cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    cancelStatus?: string;
    children?: ReactNode;
    className?: string;
    datas?: DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    errorValues?: any;
    forceUnregisterOnUnmount?: boolean;
    formValues?: any;
    footerClassName?: string;
    hideSubmitButton?: boolean;
    id?: string;
    isSubmissive?: boolean;
    name: string;
    submitIcon?: ReactNode;
    submitLabel?: string;
    touchOnChange?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<import("redux-form").DecoratedComponentClass<any, DecoratedFormProps<any, FormRenderProps, string>>, import("react-redux").Omit<React.ClassAttributes<import("redux-form").FormInstance<any, DecoratedFormProps<any, FormRenderProps, string>>> & FormRenderProps & Partial<import("redux-form").ConfigProps<any, FormRenderProps, string>> & Partial<import("redux-form").DecoratedFormState<any, string>> & Partial<import("redux-form").DecoratedFormActions<string>> & {
    _reduxForm?: import("redux-form").WrappedReduxFormContext | undefined;
}, "form" | "asyncChangeFields" | "asyncValidate" | "destroyOnUnmount" | "enableReinitialize" | "forceUnregisterOnUnmount" | "touchOnChange" | "dispatch"> & FormRenderProps>;
export default _default;
