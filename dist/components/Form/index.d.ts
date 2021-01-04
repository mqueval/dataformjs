import { FC, ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';
import { DataProps } from '../Data';
export interface FormProps {
    asyncChangeFields?: string[];
    asyncValidate?: (values: FormData, dispatch: Dispatch<any>, props: DecoratedFormProps<FormData, any>, blurredField: string) => Promise<any>;
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
    submitIcon?: ReactNode;
    submitLabel?: string;
    title?: string;
    touchOnChange?: boolean;
    validate?: (values: any, props: any) => any;
}
declare const Form: FC<FormProps>;
export default Form;
