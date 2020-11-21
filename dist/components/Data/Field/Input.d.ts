import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
export interface DataFieldInputProps extends DataFieldProps {
    description?: string;
    type?: string;
}
declare const FieldInput: FC<WrappedFieldProps & DataFieldInputProps & {
    id: string;
}>;
export default FieldInput;
