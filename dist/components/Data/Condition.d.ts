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
    groupOptions?: {
        [key: string]: any;
    };
    test: DataConditionTestProps | DataConditionTestProps[];
    valid?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataConditionProps>, Pick<DataConditionProps, "label" | "title" | "name" | "className" | "required" | "formName" | "componentType" | "params" | "actions" | "actionsClassName" | "customInfos" | "customInfosClassName" | "datas" | "formValues" | "grid" | "gridClassName" | "test" | "group" | "groupOptions"> & DataConditionProps>;
export default _default;
