import { FC, ReactElement, SyntheticEvent } from 'react';
import { Validator } from 'redux-form';
import { DataProps } from '../index';
import { DataFieldAsyncSelectProps } from './AsyncSelect';
export interface DataFieldProps extends DataProps {
    componentType: string;
    customBottom?: ReactElement | ReactElement[];
    customBottomClassName?: string;
    customTop?: ReactElement | ReactElement[];
    customTopClassName?: string;
    disabled?: boolean;
    handleOnChange?: (props: {
        change?: (formName: string, name: string, value: any) => void;
        event?: SyntheticEvent<HTMLInputElement> | any;
        name?: string;
        value?: any;
    }) => any;
    id?: string;
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
declare const DataField: FC<DataFieldAsyncSelectProps<any> | DataFieldProps>;
export default DataField;
