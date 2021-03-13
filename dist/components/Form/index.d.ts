import { FC, ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';
import { ButtonProps } from '../Button';
import { DataProps } from '../Data';
export interface FormActionProps extends ButtonProps {
    label?: string;
}
export interface FormProps {
    actions?: FormActionProps | FormActionProps[];
    asyncChangeFields?: string[];
    asyncValidate?: (values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, any>, blurredField: string) => Promise<any>;
    bodyClassName?: string;
    cancelClassName?: string;
    cancelIcon?: ReactNode;
    cancelIconColor?: string;
    cancelLabel?: string;
    cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    cancelStatus?: string;
    className?: string;
    datas?: DataProps | DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    footerClassName?: string;
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
    submitClassName?: string;
    submitIcon?: ReactNode;
    submitIconColor?: string;
    submitIconLeft?: ReactNode;
    submitIconRight?: ReactNode;
    submitIconSize?: number;
    submitLabel?: string;
    title?: string;
    touchOnChange?: boolean;
    validate?: (values: any, props: any) => any;
}
declare const Form: FC<FormProps>;
export default Form;
