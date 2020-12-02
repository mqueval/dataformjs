import React, { FC, useContext } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { blur, change, focus, WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const SelectSC = styled.select``;

export interface DataFieldSelectProps extends DataFieldProps {
  hasEmpty?: boolean;
  options?: { label: string; value: any }[];
  multi?: boolean;
  getOptionLabel?: (option: any) => any;
  getOptionValue?: (option: any) => any;
}

const FieldSelect: FC<WrappedFieldProps & DataFieldSelectProps> = ({
  disabled,
  formName,
  getOptionLabel,
  getOptionValue,
  hasEmpty = true,
  handleOnChange,
  id,
  input,
  options,
  placeholder,
  meta: { error, touched },
  multi = false,
  ...others
}) => {
  const { getControlStyle, t, sc } = useContext(FormidableContext);
  const dispatch = useDispatch();

  if (!formName) {
    return <div>select : erreur de paramètre : formName obligatoire</div>;
  }

  if (!options) {
    return <div>select : erreur de paramètre : options obligatoire</div>;
  }

  if (multi) {
    const { name, value } = input;

    const styles = {
      control: (base: any): any =>
        getControlStyle
          ? getControlStyle({
              ...others,
              status: touched && error ? 'error' : undefined,
            })
          : base,
    };

    const handleOnBlur = (): void => {
      dispatch(blur(formName, name, value, true));
    };

    const handleInnerOnChange = (changeValue: any): void => {
      if (handleOnChange) {
        handleOnChange({
          change: (...props) => dispatch(change(...props)),
          value: changeValue,
        });
      }

      dispatch(
        change(
          formName,
          name,
          changeValue && changeValue.map(handleGetOptionValue),
        ),
      );
    };

    const handleOnFocus = (): void => {
      dispatch(focus(formName, name));
    };

    const handleGetOptionLabel = (option: any): any => {
      if (getOptionLabel) {
        return getOptionLabel(option);
      }

      return t && option.label ? t(option.label) : option.label;
    };

    const handleGetOptionValue = (option: any): any => {
      if (getOptionValue) {
        return getOptionValue(option);
      }

      return option.value;
    };

    return (
      <Select
        getOptionLabel={handleGetOptionLabel}
        getOptionValue={handleGetOptionValue}
        isMulti
        onBlur={handleOnBlur}
        onChange={handleInnerOnChange}
        onFocus={handleOnFocus}
        options={options}
        styles={styles}
      />
    );
  }

  return (
    <SelectSC
      {...input}
      as={sc && sc.select}
      disabled={disabled}
      id={id}
      required
      status={touched && error ? 'error' : null}
    >
      <option aria-label={placeholder} disabled hidden={!hasEmpty} value="">
        {t && placeholder ? t(placeholder) : placeholder}
      </option>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {t ? t(label) : label}
        </option>
      ))}
    </SelectSC>
  );
};

export default FieldSelect;
