import { FC, ReactNode, VFC } from 'react';
import AsyncSelect from 'react-select/async';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldSelectProps } from './Select';
export declare const SelectSC: import("styled-components").StyledComponent<typeof AsyncSelect, any, {}, never>;
export declare const Input: VFC<any>;
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
}
declare const FieldAsyncSelect: FC<WrappedFieldProps & DataFieldAsyncSelectProps<any>>;
export default FieldAsyncSelect;
