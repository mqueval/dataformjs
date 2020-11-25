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
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataConditionProps>, Pick<DataConditionProps, "label" | "name" | "formName" | "componentType" | "params" | "required" | "className" | "datas" | "formValues" | "test"> & DataConditionProps>;
export default _default;
