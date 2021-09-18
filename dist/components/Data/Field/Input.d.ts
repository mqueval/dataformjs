import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
export interface DataFieldInputProps extends DataFieldProps {
    autoComplete?: string;
    description?: string;
    descriptionParams?: {
        [key: string]: any;
    };
    mask?: string;
    min?: number | string;
    max?: number | string;
    step?: number;
}
declare const FieldInput: FC<WrappedFieldProps & DataFieldInputProps>;
export default FieldInput;
