import { FC } from 'react';
import { DataProps } from '../Data';
interface FormProps {
    className?: string;
    datas?: DataProps | DataProps[];
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
