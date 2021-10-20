import React from 'react';
import { DataProps } from './index';
export interface DataConditionTestProps {
    field: string;
    operator: string;
    value?: any;
}
interface DataConditionProps extends DataProps {
    className?: string;
    datas: DataProps[];
    formName: string;
    group?: boolean;
    groupProps?: {
        [key: string]: any;
    };
    test: DataConditionTestProps | DataConditionTestProps[];
    valid?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataConditionProps>, import("react-redux").Omit<DataConditionProps, "valid"> & DataConditionProps>;
export default _default;
