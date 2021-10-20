import { FC, ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
export interface DataFieldSelectProps extends DataFieldProps {
    formatOptionLabel?: (option: any, props: {
        context: 'menu' | 'value';
        inputValue?: string;
        selectValue?: any | any[];
    }) => ReactNode;
    hasEmpty?: boolean;
    isSearchable?: boolean;
    getOptionLabel?: (option: any) => any;
    getOptionValue?: (option: any) => any;
    standard?: boolean;
}
declare const FieldSelect: FC<WrappedFieldProps & DataFieldSelectProps>;
export default FieldSelect;
