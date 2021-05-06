import { FC } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';
import { DataProps } from '../Data';
export interface FormActionProps {
    label?: string;
}
export interface FormDivActionProps {
    className?: string;
    actions: FormActionProps[];
}
export interface FormProps {
    actions?: FormActionProps | FormActionProps[] | FormDivActionProps[];
    asyncChangeFields?: string[];
    asyncValidate?: (values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, any>, blurredField: string) => Promise<any>;
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
    name: string;
    onChange?(values: Partial<FormData>, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, any>, previousValues: Partial<FormData>): void;
    onSubmit: (values?: any) => void;
    params?: {
        [key: string]: any;
    };
    submitProps?: {
        [key: string]: any;
    };
    title?: string;
    touchOnChange?: boolean;
    validate?: (values: any, props: any) => any;
}
declare const Form: FC<FormProps>;
export default Form;
