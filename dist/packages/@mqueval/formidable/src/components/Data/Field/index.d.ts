import { FC, ReactElement, SyntheticEvent } from 'react';
import { Validator } from 'redux-form';
import { DataProps } from '../index';
export interface DataFieldProps extends DataProps {
    componentType: string;
    customBottom?: ReactElement | ReactElement[];
    customBottomClassName?: string;
    customTop?: ReactElement | ReactElement[];
    customTopClassName?: string;
    disabled?: boolean;
    handleOnChange?: (e: SyntheticEvent<HTMLElement>, name: string) => any;
    label?: string;
    name: string;
    params?: {
        [key: string]: any;
    };
    placeholder?: string;
    required?: boolean;
    validate?: Validator | Validator[];
}
declare const DataField: FC<DataFieldProps>;
export default DataField;
