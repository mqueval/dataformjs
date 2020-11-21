import { FC } from 'react';
export interface DataProps {
    className?: string;
    componentType?: string;
    datas?: DataProps[];
    label?: string;
    name?: string;
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
}
declare const Data: FC<DataProps & {
    formName: string;
    params?: {
        [key: string]: any;
    };
}>;
export default Data;
