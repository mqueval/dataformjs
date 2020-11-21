import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
declare const FieldTextarea: FC<WrappedFieldProps & DataFieldProps & {
    id: string;
}>;
export default FieldTextarea;
