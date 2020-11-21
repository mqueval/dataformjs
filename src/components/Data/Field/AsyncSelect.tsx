import React, { FC, useContext } from 'react';
import { useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { change, WrappedFieldProps } from 'redux-form';

import { FormidableContext } from '../../../index';
import { DataFieldSelectProps } from './Select';

export interface DataFieldAsyncSelectProps extends DataFieldSelectProps {
  formName: string;
  getOptionLabel?: (option: any) => string;
  isOptionSelected?: (option: any, optionsSelected: any) => boolean;
  searchOptions?: (inputValue: string) => Promise<any[]>;
}

const FieldAsyncSelect: FC<WrappedFieldProps &
  DataFieldAsyncSelectProps & {
    id: string;
  }> = ({
  formName,
  getOptionLabel,
  id,
  input,
  isOptionSelected,
  placeholder,
  searchOptions,
}) => {
  const dispatch = useDispatch();
  const { t } = useContext(FormidableContext);

  if (!formName) {
    return <div>async-select : erreur de paramètre : formName obligatoire</div>;
  }

  if (!searchOptions) {
    return (
      <div>async-select : erreur de paramètre : searchOptions obligatoire</div>
    );
  }

  const { name } = input;

  const handleOnBlur = (event: any): void => {
    console.info('FieldAsyncSelect handleOnBlur', event);
  };

  const handleOnChange = (value: any): void => {
    console.info('FieldAsyncSelect handleOnChange', value);
    dispatch(change(formName, input.name, value));
  };

  const handleOnFocus = (event: any): void => {
    console.info('FieldAsyncSelect handleOnFocus', event);
  };

  return (
    <AsyncSelect
      defaultOptions
      getOptionLabel={getOptionLabel}
      inputId={id}
      isClearable
      isOptionSelected={isOptionSelected}
      loadOptions={searchOptions}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      onFocus={handleOnFocus}
      placeholder={t && placeholder ? t(placeholder) : placeholder}
    />
  );
};

export default FieldAsyncSelect;
