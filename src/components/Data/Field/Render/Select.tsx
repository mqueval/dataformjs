import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';

import { FormidableContext } from '../../../../index';
import { DataFieldProps } from '../index';

const SelectSC = styled.select<{ status?: string }>``;

interface DataFieldSelectOption {
  disabled?: boolean;
  label: string;
  options?: DataFieldSelectOption[];
  selected?: boolean;
  value: string | number;
}

export interface DataFieldSelectProps extends DataFieldProps {
  hasEmpty?: boolean;
  options: DataFieldSelectOption[];
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
      status={touched && error ? 'error' : undefined}
    >
      <option aria-label={placeholder} disabled hidden={!hasEmpty} value="">
        {t && placeholder ? t(placeholder) : placeholder}
      </option>
      {options.map(({ disabled: d, label, options: o, value }) => {
        if (o && o.length > 0) {
          return (
            <optgroup key={`${label}_${o.length}`} label={label}>
              {o.map(({ disabled: od, label: ol, value: ov }) => (
                <option key={ov} disabled={od} value={ov}>
                  {t ? t(ol) : ol}
                </option>
              ))}
            </optgroup>
          );
        }

        return (
          <option key={value} disabled={d} value={value}>
            {t ? t(label) : label}
          </option>
        );
      })}
    </SelectSC>
  );
};

export default FieldSelect;
