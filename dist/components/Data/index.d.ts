import { FC, ReactNode } from 'react';
import DataArray from './Array';
import { DataConditionTestProps } from './Condition';
export interface DataProps {
    actions?: any;
    actionsClassName?: string;
    className?: string;
    customInfos?: ReactNode;
    customInfosClassName?: string;
    componentType?: string;
    datas?: DataProps[];
    formName?: string;
    formValues?: {
        [key: string]: any;
    };
    grid?: boolean;
    gridClassName?: string;
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
