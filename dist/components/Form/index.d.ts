import { FC, ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';
import { DataProps } from '../Data';
export interface FormProps<P> {
    asyncChangeFields?: string[];
    asyncValidate?: (values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, P>, blurredField: string) => Promise<any>;
    cancelIcon?: ReactNode;
    cancelLabel?: string;
    cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    cancelStatus?: string;
    className?: string;
    datas?: DataProps | DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    forceUnregisterOnUnmount?: boolean;
    id?: string;
    initialValues?: {
        [key: string]: any;
    };
    isSubmissive?: boolean;
    name: string;
    onChange?(values: Partial<FormData>, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, P>, previousValues: Partial<FormData>): void;
    onSubmit: (values?: any) => void;
    params?: {
        [key: string]: any;
    };
    submitIcon?: ReactNode;
    submitLabel?: string;
    touchOnChange?: boolean;
    validate?: (values: any, props: any) => any;
}
declare const Form: FC<FormProps<any>>;
export default Form;
