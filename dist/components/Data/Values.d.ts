import React from 'react';
import { DataProps } from './index';
interface DataFieldValuesProps extends DataProps {
    formName: string;
    params?: {
        [key: string]: any;
    };
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataFieldValuesProps>, Pick<DataFieldValuesProps, "required" | "label" | "title" | "type" | "formName" | "componentType" | "name" | "params" | "actions" | "actionsProps" | "className" | "customInfos" | "customInfosProps" | "datas" | "grid" | "gridProps" | "test"> & DataFieldValuesProps>;
export default _default;
