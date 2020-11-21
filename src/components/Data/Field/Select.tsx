import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const SelectSC = styled.select``;

export interface DataFieldSelectProps extends DataFieldProps {
  hasEmpty?: boolean;
  options?: { label: string; value: any }[];
}

const FieldSelect: FC<WrappedFieldProps &
  DataFieldSelectProps & {
    id: string;
  }> = ({
  disabled,
  hasEmpty = true,
  id,
  input,
  options,
  placeholder,
  meta: { error, touched },
}) => {
  const { t, theme } = useContext(FormidableContext);

  if (!options) {
    return <div>select : erreur de paramètre : options obligatoire</div>;
  }

  return (
    <SelectSC
      {...input}
      as={theme && theme.select}
      disabled={disabled}
      id={id}
      required
      theme={touched && error ? 'error' : null}
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
