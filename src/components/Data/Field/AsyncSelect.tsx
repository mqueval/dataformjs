import React, { FC, ReactNode, useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { components, ContainerProps } from 'react-select';
import AsyncSelect from 'react-select/async';
import { change, WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldSelectProps } from './Select';

export const SelectSC = styled(AsyncSelect)`
  .DataFieldAsyncSelect__value-container {
    padding-bottom: 0;
    padding-top: 0;
    padding-left: 0;
  }

  .DataFieldAsyncSelect__control {
    padding-right: 0 !important;
  }

  .DataFieldAsyncSelect__value-container div {
    margin-left: 0;
  }

  .DataFieldAsyncSelect__value-container div:last-child {
    //.DataFieldAsyncSelect__value-container--has-value + div,
    //.DataFieldAsyncSelect__single-value + div,
    //.DataFieldAsyncSelect__placeholder + div {
    margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;
  }

  .DataFieldAsyncSelect__multi-value {
    line-height: 2;
  }
`;

export interface DataFieldAsyncSelectProps<P> extends DataFieldSelectProps {
  cacheOptions?: boolean;
  customOption?: any;
  defaultOptions?: boolean;
  defaultValue?: P | P[];
  formatOptionLabel?: (
    option: P,
    props: {
      context: 'menu' | 'value';
      inputValue?: string;
      selectValue?: P | P[];
    },
  ) => ReactNode;
  getOptionLabel?: (option: P) => string;
  getOptionValue?: (option: P) => string;
  hideSelectedOptions?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  isOptionDisabled?: (option: P, selectValue?: P | P[]) => boolean;
  isOptionSelected?: (option: P, selectValue?: P | P[]) => boolean;
  isSearchable?: boolean;
  loadOptions?: (inputValue: string) => Promise<P[]>;
  loadingMessage?: ({ inputValue }: { inputValue?: string }) => ReactNode;
  noOptionsMessage?: ({ inputValue }: { inputValue?: string }) => ReactNode;
  value?: P | P[];
}

const FieldAsyncSelect: FC<
  WrappedFieldProps & DataFieldAsyncSelectProps<any>
> = ({
  cacheOptions = false,
  className,
  customOption,
  defaultOptions = false,
  defaultValue,
  formatOptionLabel,
  formName,
  getOptionLabel,
  getOptionValue,
  handleOnChange,
  hideSelectedOptions = false,
  id,
  input,
  isClearable = false,
  isMulti,
  isOptionDisabled,
  isOptionSelected,
  isSearchable = true,
  loadOptions,
  loadingMessage,
  meta,
  meta: { error, touched },
  noOptionsMessage,
  placeholder,
  ...others
}) => {
  let newValue: any;
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { getControlStyle, t } = useContext(FormidableContext);

  console.info('async select error', error);

  if (!formName) {
    return <div>async-select : erreur de paramètre : formName obligatoire</div>;
  }

  if (!loadOptions) {
    return (
      <div>async-select : erreur de paramètre : loadOptions obligatoire</div>
    );
  }

  const { name, value } = input;

  const handleOnBlur = (event: any): void => {
    input.onBlur(newValue || value);
  };

  const handleInnerOnChange = (changeValue: any, options: any): void => {
    newValue = changeValue;
    if (handleOnChange) {
      handleOnChange({
        change: (...props) => dispatch(change(...props)),
        value: changeValue,
      });
    }
    dispatch(change(formName, name, changeValue, true));
  };

  const handleOnFocus = (event: any): void => {
    input.onFocus(event);
  };

  const newComponents: { [key: string]: any } = {};

  if (customOption) {
    newComponents.Option = customOption;
  }

  // const SelectContainer: FC<ContainerProps<any>> = ({ children, ...props }) => (
  //   <div>
  //     <components.SelectContainer {...props}>
  //       {children}
  //     </components.SelectContainer>
  //   </div>
  // );
  //
  // newComponents.SelectContainer = SelectContainer;

  const styles = {
    control: (base: any): any =>
      getControlStyle
        ? getControlStyle({
            ...others,
            status: touched && error ? 'error' : undefined,
          })
        : base,
  };

  return (
    <>
      <input ref={inputRef} name={name} type="hidden" />
      <SelectSC
        cacheOptions={cacheOptions}
        className={className}
        classNamePrefix="DataFieldAsyncSelect"
        components={newComponents}
        defaultOptions={defaultOptions}
        defaultValue={defaultValue}
        formatOptionLabel={formatOptionLabel}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        hideSelectedOptions={hideSelectedOptions}
        innerId={id}
        isClearable={isClearable}
        isMulti={isMulti}
        isOptionDisabled={isOptionDisabled}
        isOptionSelected={isOptionSelected}
        isSearchable={isSearchable}
        loadOptions={loadOptions}
        loadingMessage={loadingMessage}
        noOptionsMessage={noOptionsMessage}
        onBlur={handleOnBlur}
        onChange={handleInnerOnChange}
        onFocus={handleOnFocus}
        placeholder={t && placeholder ? t(placeholder) : placeholder}
        styles={styles}
        value={value}
      />
    </>
  );
};

export default FieldAsyncSelect;
