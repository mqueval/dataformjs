import { FC, ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';
import { DataProps } from '../Data';
export interface FormActionProps {
    iconColor?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    iconSize?: number;
    label?: string;
    onClick: (event: SyntheticEvent<HTMLButtonElement>) => any;
    size?: string;
    status?: string;
}
export interface FormDivActionProps {
    className?: string;
    actions: FormActionProps[];
}
export interface FormProps {
    actions?: FormActionProps | FormActionProps[] | FormDivActionProps[];
    asyncChangeFields?: string[];
    asyncValidate?: (values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, any>, blurredField: string) => Promise<any>;
    autosave?: boolean;
    bodyProps?: {
        [key: string]: any;
    };
    cancelProps?: {
        [key: string]: any;
    };
    className?: string;
    datas?: DataProps | DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    footerProps?: {
        [key: string]: any;
    };
    forceUnregisterOnUnmount?: boolean;
    hideSubmitButton?: boolean;
    id?: string;
    initialValues?: {
        [key: string]: any;
    };
    isSubmissive?: boolean;
    keepDirtyOnReinitialize?: boolean;
    name: string;
    onChange?(values: Partial<FormData>, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, any>, previousValues: Partial<FormData>): void;
    onSubmit: (values?: any) => void;
    params?: {
        [key: string]: any;
    };
    removePristine?: boolean;
    submitProps?: {
        [key: string]: any;
    };
    title?: string;
    touchOnChange?: boolean;
    updateUnregisteredFields?: boolean;
    validate?: (values: any, props: any) => any;
}
declare const Form: FC<FormProps>;
export default Form;
