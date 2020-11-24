import React, { FC, ReactNode, useContext } from 'react';
import { useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { change, WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldSelectProps } from './Select';

const SelectSC = styled(AsyncSelect)``;

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

const FieldAsyncSelect: FC<WrappedFieldProps &
  DataFieldAsyncSelectProps<any> & {
    id: string;
  }> = ({
  cacheOptions = false,
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
  noOptionsMessage,
  placeholder,
}) => {
  const dispatch = useDispatch();
  const { t } = useContext(FormidableContext);

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
    // console.info('FieldAsyncSelect handleOnBlur', event);
  };

  const handleInnerOnChange = (changeValue: any): void => {
    if (handleOnChange) {
      handleOnChange({
        change: (...props) => dispatch(change(...props)),
        value: changeValue,
      });
    }
    // console.info('FieldAsyncSelect handleOnChange', value);
    dispatch(change(formName, name, changeValue));
  };

  const handleOnFocus = (event: any): void => {
    // console.info('FieldAsyncSelect handleOnFocus', event);
  };

  const components: { [key: string]: any } = {};

  if (customOption) {
    components.Option = customOption;
  }

  return (
    <SelectSC
      cacheOptions={cacheOptions}
      components={components}
      defaultOptions={defaultOptions}
      defaultValue={defaultValue}
      formatOptionLabel={formatOptionLabel}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      hideSelectedOptions={hideSelectedOptions}
      inputId={id}
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
      value={value}
    />
  );
};

export default FieldAsyncSelect;
