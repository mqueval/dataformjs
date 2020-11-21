import { FC } from 'react';
import { DataProps } from './index';
declare const DataSection: FC<DataProps & {
    name: string;
    formName: string;
    params?: {
        [key: string]: any;
    };
}>;
export default DataSection;
