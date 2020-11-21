import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldSelectProps } from './Select';
export interface DataFieldAsyncSelectProps extends DataFieldSelectProps {
    formName: string;
    getOptionLabel?: (option: any) => string;
    isOptionSelected?: (option: any, optionsSelected: any) => boolean;
    searchOptions?: (inputValue: string) => Promise<any[]>;
}
declare const FieldAsyncSelect: FC<WrappedFieldProps & DataFieldAsyncSelectProps & {
    id: string;
}>;
export default FieldAsyncSelect;
