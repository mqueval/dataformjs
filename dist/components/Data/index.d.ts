import { FC, ReactNode } from 'react';
import DataArray from './Array';
import { DataConditionTestProps } from './Condition';
export interface DataProps {
    className?: string;
    customInfos?: ReactNode;
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
    test?: DataConditionTestProps | DataConditionTestProps[];
}
declare const Data: FC<DataProps & {
    formName: string;
}>;
export default Data;
export { DataArray };
