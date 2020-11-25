import React from 'react';
import { DataProps } from './index';
interface DataFieldValuesProps extends DataProps {
    formName: string;
    params?: {
        [key: string]: any;
    };
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<DataFieldValuesProps>, Pick<DataFieldValuesProps, "label" | "name" | "formName" | "componentType" | "params" | "required" | "className" | "datas" | "test"> & DataFieldValuesProps>;
export default _default;
