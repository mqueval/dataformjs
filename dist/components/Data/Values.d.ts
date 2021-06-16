import React from 'react';
import { DataProps } from './index';
interface DataFieldValuesProps extends DataProps {
    formName: string;
    params?: {
        [key: string]: any;
    };
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataFieldValuesProps>, Pick<DataFieldValuesProps, "label" | "title" | "className" | "required" | "formName" | "componentType" | "name" | "params" | "actions" | "actionsProps" | "customInfos" | "customInfosProps" | "datas" | "grid" | "gridProps" | "test"> & DataFieldValuesProps>;
export default _default;
