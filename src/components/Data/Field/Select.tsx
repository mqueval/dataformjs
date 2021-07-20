import classnames from 'classnames';
import React, { FC, ReactNode, useContext } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { change, focus, WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { Input, SelectSC as MultiSelectSC } from './AsyncSelect';
import { DataFieldProps } from './index';

const SelectSC = styled.select``;

export interface DataFieldSelectProps extends DataFieldProps {
  formatOptionLabel?: (
    option: any,
    props: {
      context: 'menu' | 'value';
      inputValue?: string;
      selectValue?: any | any[];
    },
  ) => ReactNode;
  hasEmpty?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
  getOptionLabel?: (option: any) => any;
  getOptionValue?: (option: any) => any;
  standard?: boolean;
}

const FieldSelect: FC<WrappedFieldProps & DataFieldSelectProps> = ({
  disabled,
  formName,
  formatOptionLabel,
  getOptionLabel,
  getOptionValue,
  hasEmpty = true,
  handleOnChange,
  id,
  input,
  isSearchable = false,
  options,
  placeholder,
  meta: { error, touched },
  isMulti = false,
  standard = true,
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

  if (isMulti || !standard) {
    const { name } = input;

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
      // dispatch(blur(formName, name, newValue || value, true));
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
          changeValue && isMulti
            ? changeValue.map(handleGetOptionValue)
            : handleGetOptionValue(changeValue),
        ),
      );
    };

    const handleOnFocus = (): void => {
      dispatch(focus(formName, name));
    };

    const handleFormatOptionLabel = (
      option: any,
      {
        context,
      }: {
        context: 'menu' | 'value';
        inputValue?: string;
        selectValue?: any | any[];
      },
    ) => {
      if (formatOptionLabel) {
        return formatOptionLabel(option, { context });
      }

      if ('value' === context) {
        return t && option.label ? t(option.label) : option.label;
      }

      return (
        <>
          <span
            className={classnames('label', {
              'font-bold': option.data && Object.keys(option.data).length > 0,
            })}
          >
            {t && option.label ? t(option.label) : option.label}
          </span>
          {option.data && (
            <>
              {Object.keys(option.data).map(key => (
                <span
                  key={`${option.value}_${key}`}
                  className={classnames('block', key)}
                >
                  {t && option.data[key]
                    ? t(option.data[key])
                    : option.data[key]}
                </span>
              ))}
            </>
          )}
        </>
      );
    };

    const handleGetOptionLabel = (option: any): any => {
      if (getOptionLabel) {
        return getOptionLabel(option);
      }

      return (
        <>
          <span
            className={classnames('label', {
              'font-bold': option.data && Object.keys(option.data).length > 0,
            })}
          >
            {t && option.label ? t(option.label) : option.label}
          </span>
          {option.data && (
            <>
              {Object.keys(option.data).map(key => (
                <span
                  key={`${option.value}_${key}`}
                  className={classnames('block', key)}
                >
                  {t && option.data[key]
                    ? t(option.data[key])
                    : option.data[key]}
                </span>
              ))}
            </>
          )}
        </>
      );
    };

    const handleGetOptionValue = (option: any): any => {
      if (getOptionValue) {
        return getOptionValue(option);
      }

      return option && option.value;
    };

    return (
      <MultiSelectSC
        as={Select}
        autoComplete="new-password"
        classNamePrefix="DataFieldSelect"
        component={{ Input }}
        formatOptionLabel={handleFormatOptionLabel}
        getOptionLabel={handleGetOptionLabel}
        getOptionValue={handleGetOptionValue}
        inputId={id}
        isMulti={isMulti}
        isSearchable={isSearchable}
        onBlur={handleOnBlur}
        onChange={handleInnerOnChange}
        onFocus={handleOnFocus}
        options={options}
        placeholder={t && placeholder ? t(placeholder) : placeholder}
        styles={styles}
        value={
          isMulti
            ? input.value &&
              input.value.map((v: any) => options.find(o => o.value === v))
            : options.find(o => o.value === input.value)
        }
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
      {options.map(({ disabled: d, label, value }) => (
        <option key={value} disabled={d} value={value}>
          {t ? t(label) : label}
        </option>
      ))}
    </SelectSC>
  );
};

export default FieldSelect;
