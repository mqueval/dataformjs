import { FC, ReactElement, SyntheticEvent } from 'react';
import { Validator } from 'redux-form';
import { DataProps } from '../index';
import { DataFieldAsyncSelectProps } from './AsyncSelect';
import { DataFieldInputProps } from './Input';
import { DataFieldSelectProps } from './Select';
export interface DataFieldProps extends DataProps {
    componentType: string;
    customBottom?: ReactElement | ReactElement[];
    customBottomClassName?: string;
    customTop?: ReactElement | ReactElement[];
    customTopClassName?: string;
    disabled?: boolean;
    handleOnChange?: (e: SyntheticEvent<HTMLInputElement>, name: string) => any;
    label?: string;
    name: string;
    params?: {
        [key: string]: any;
    };
    placeholder?: string;
    required?: boolean;
    type?: string;
    validate?: Validator | Validator[];
}
declare const DataField: FC<DataFieldAsyncSelectProps | DataFieldInputProps | DataFieldSelectProps | DataFieldProps>;
export default DataField;
