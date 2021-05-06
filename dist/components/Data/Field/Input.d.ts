import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
export interface DataFieldInputProps extends DataFieldProps {
    autoComplete?: string;
    description?: string;
    mask?: string;
    min?: number | string;
    max?: number | string;
    step?: number;
    type?: string;
}
declare const FieldInput: FC<WrappedFieldProps & DataFieldInputProps>;
export default FieldInput;
