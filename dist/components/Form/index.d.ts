import { FC, SyntheticEvent } from 'react';
import { DataProps } from '../Data';
interface FormProps {
    cancelLabel?: string;
    cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    className?: string;
    datas?: DataProps | DataProps[];
    destroyOnUnmount?: boolean;
    enableReinitialize?: boolean;
    forceUnregisterOnUnmount?: boolean;
    id?: string;
    initialValues?: {
        [key: string]: any;
    };
    name: string;
    onSubmit: (values: any) => void;
    params?: {
        [key: string]: any;
    };
    submitLabel?: string;
    validate?: (values: any, props: any) => any;
}
declare const Form: FC<FormProps>;
export default Form;
