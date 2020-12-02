import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
export interface DataFieldSelectProps extends DataFieldProps {
    hasEmpty?: boolean;
    options?: {
        label: string;
        value: any;
    }[];
    multi?: boolean;
    getOptionLabel?: (option: any) => any;
    getOptionValue?: (option: any) => any;
}
declare const FieldSelect: FC<WrappedFieldProps & DataFieldSelectProps>;
export default FieldSelect;
