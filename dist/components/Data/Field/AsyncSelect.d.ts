import { FC, ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldSelectProps } from './Select';
export interface DataFieldAsyncSelectProps<P> extends DataFieldSelectProps {
    cacheOptions?: boolean;
    customOption?: any;
    defaultOptions?: boolean;
    defaultValue?: P | P[];
    formatOptionLabel?: (option: P, props: {
        context: 'menu' | 'value';
        inputValue?: string;
        selectValue?: P | P[];
    }) => ReactNode;
    getOptionLabel?: (option: P) => string;
    getOptionValue?: (option: P) => string;
    hideSelectedOptions?: boolean;
    isClearable?: boolean;
    isMulti?: boolean;
    isOptionDisabled?: (option: P, selectValue?: P | P[]) => boolean;
    isOptionSelected?: (option: P, selectValue?: P | P[]) => boolean;
    isSearchable?: boolean;
    loadOptions?: (inputValue: string) => Promise<P[]>;
    loadingMessage?: ({ inputValue }: {
        inputValue?: string;
    }) => ReactNode;
    noOptionsMessage?: ({ inputValue }: {
        inputValue?: string;
    }) => ReactNode;
    value?: P | P[];
}
declare const FieldAsyncSelect: FC<WrappedFieldProps & DataFieldAsyncSelectProps<any>>;
export default FieldAsyncSelect;
