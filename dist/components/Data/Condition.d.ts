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
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataConditionProps>, Pick<DataConditionProps, "required" | "label" | "title" | "formName" | "componentType" | "name" | "params" | "actions" | "actionsProps" | "className" | "customInfos" | "customInfosProps" | "datas" | "formValues" | "grid" | "gridProps" | "test" | "group" | "groupProps"> & DataConditionProps>;
export default _default;
