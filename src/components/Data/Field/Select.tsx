import React, { FC, ReactNode, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
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
  getOptionLabel?: (option: any) => any;
  getOptionValue?: (option: any) => any;
  standard?: boolean;
}

const FieldSelect: FC<WrappedFieldProps & DataFieldSelectProps> = ({
  disabled,
  formName,
  hasEmpty = true,
  id,
  input,
  options,
  placeholder,
  meta: { error, touched },
}) => {
  const { t, sc } = useContext(FormidableContext);

  if (!formName) {
    return <div>select : erreur de paramètre : formName obligatoire</div>;
  }

  if (!options) {
    return <div>select : erreur de paramètre : options obligatoire</div>;
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
