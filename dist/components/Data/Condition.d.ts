import React from 'react';
import { DataProps } from './index';
export interface DataConditionTestProps {
    field: string;
    operator: string;
    value?: any;
}
interface DataConditionProps extends DataProps {
    datas: DataProps[];
    className?: string;
    formName: string;
    group?: boolean;
    groupOptions?: {
        [key: string]: any;
    };
    test: DataConditionTestProps | DataConditionTestProps[];
    valid?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataConditionProps>, Pick<DataConditionProps, "required" | "label" | "title" | "formName" | "componentType" | "name" | "params" | "actions" | "actionsClassName" | "className" | "customInfos" | "datas" | "formValues" | "test" | "group" | "groupOptions"> & DataConditionProps>;
export default _default;
