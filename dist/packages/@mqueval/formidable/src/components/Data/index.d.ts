import { FC } from 'react';
export interface DataProps {
    className?: string;
    columns?: boolean;
    componentType?: string;
    datas?: DataProps[];
    disabled?: boolean;
    label?: string;
    name?: string;
    options?: {
        label: string;
        value: any;
    }[];
    required?: boolean;
    test?: {
        field: string;
        operator: string;
        value: any;
    } | {
        field: string;
        operator: string;
        value: any;
    }[];
    title?: string;
    type?: string;
}
declare const Data: FC<DataProps & {
    formName: string;
    params?: {
        [key: string]: any;
    };
}>;
export default Data;
