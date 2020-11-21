import React from 'react';
import { DataProps } from './index';
export interface DataConditionTestProps {
    field: string;
    operator: string;
    value: any;
}
interface DataConditionProps extends DataProps {
    datas: DataProps[];
    formName: string;
    test: DataConditionTestProps | DataConditionTestProps[];
    valid?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataConditionProps>, Pick<DataConditionProps, "datas" | "formName" | "className" | "columns" | "componentType" | "disabled" | "label" | "name" | "options" | "required" | "test" | "title" | "type"> & DataConditionProps>;
export default _default;
