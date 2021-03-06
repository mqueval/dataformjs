import { FC } from 'react';
import { DataProps } from './index';
declare const DataSection: FC<DataProps & {
    className?: string;
    name: string;
    formName: string;
    group?: boolean;
    groupOptions?: {
        [key: string]: any;
    };
    params?: {
        [key: string]: any;
    };
}>;
export default DataSection;
