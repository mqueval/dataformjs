import { FC, ReactNode } from 'react';
import DataArray from './Array';
import { DataConditionTestProps } from './Condition';
export interface DataProps {
    actions?: any;
    actionsProps?: {
        [key: string]: any;
    };
    className?: string;
    customInfos?: ReactNode;
    customInfosProps?: {
        [key: string]: any;
    };
    componentType?: string;
    datas?: DataProps[];
    formName?: string;
    formValues?: {
        [key: string]: any;
    };
    grid?: boolean;
    gridProps?: {
        [key: string]: any;
    };
    label?: string;
    name?: string;
    params?: {
        [key: string]: any;
    };
    required?: boolean;
    title?: string;
    test?: DataConditionTestProps | DataConditionTestProps[];
}
declare const Data: FC<DataProps & {
    formName: string;
}>;
export default Data;
export { DataArray };
