import { FC } from 'react';
import DataArray from './Array';
export interface DataProps {
    className?: string;
    componentType?: string;
    datas?: DataProps[];
    formName?: string;
    formValues?: {
        [key: string]: any;
    };
    label?: string;
    name?: string;
    params?: {
        [key: string]: any;
    };
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
}>;
export default Data;
export { DataArray };
