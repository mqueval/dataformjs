import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
interface DataFieldSelectProps extends DataFieldProps {
    hasEmpty?: boolean;
    options?: {
        label: string;
        value: any;
    }[];
}
declare const FieldSelect: FC<WrappedFieldProps & DataFieldSelectProps & {
    id: string;
}>;
export default FieldSelect;
