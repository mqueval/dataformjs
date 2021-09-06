import { FC, ReactElement, SyntheticEvent } from 'react';
import { Validator } from 'redux-form';
import { DataProps } from '../index';
import { DataFieldAsyncSelectProps } from './AsyncSelect';
import { DataFieldInputProps } from './Input';
export interface DataFieldProps extends DataProps {
    componentType: string;
    column?: boolean;
    columnProps?: {
        [key: string]: any;
    };
    customAction?: ReactElement | ReactElement[];
    customActionProps?: {
        [key: string]: any;
    };
    customBottom?: ReactElement | ReactElement[];
    customBottomProps?: {
        [key: string]: any;
    };
    customTop?: ReactElement | ReactElement[];
    customTopProps?: {
        [key: string]: any;
    };
    disabled?: boolean;
    fieldProps?: {
        [key: string]: any;
    };
    handleOnChange?: (props: {
        change?: (formName: string, name: string, value: any) => void;
        event?: SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | any;
        name?: string;
        value?: any;
    }) => any;
    handleOnBlur?: (props: {
        event?: SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
        name?: string;
        value?: any;
    }) => void;
    id?: string;
    label?: string;
    labelShow?: boolean;
    message?: string;
    name: string;
    options?: {
        disabled?: boolean;
        label: string;
        value: string | number;
        id?: string;
    }[];
    optionsProps?: {
        [key: string]: any;
    };
    params?: {
        [key: string]: any;
    };
    placeholder?: string;
    required?: boolean;
    templateProps?: {
        [key: string]: any;
    };
    type?: string;
    validate?: Validator | Validator[];
    wrapperProps?: {
        [key: string]: any;
    };
}
declare const DataField: FC<DataFieldAsyncSelectProps<any> | DataFieldInputProps | DataFieldProps>;
export default DataField;
