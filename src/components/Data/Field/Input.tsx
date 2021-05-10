import React, { FC, useContext } from 'react';
import InputMask from 'react-input-mask';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const InputSC = styled.input``;

export interface DataFieldInputProps extends DataFieldProps {
  autoComplete?: string;
  description?: string;
  mask?: string;
  min?: number | string;
  max?: number | string;
  step?: number;
  type?: string;
}

const FieldInput: FC<WrappedFieldProps & DataFieldInputProps> = ({
  autoComplete,
  description,
  disabled,
  fieldProps,
  id,
  input,
  placeholder,
  mask,
  max,
  meta: { error, touched },
  min,
  step,
  type = 'text',
}) => {
  const { t, sc } = useContext(FormidableContext);

  const newFieldProps = {
    ...fieldProps,
    disabled,
    id,
    max,
    min,
    step,
    as: sc && sc.input,
    placeholder: t && placeholder ? t(placeholder) : placeholder,
    status: touched && error ? 'error' : undefined,
    type: mask ? 'text' : type,
  };

  return (
    <>
      {mask ? (
        <InputMask mask={mask} {...input}>
          {(inputProps: any) => (
            <InputSC
              {...inputProps}
              {...newFieldProps}
              autoComplete={autoComplete}
            />
          )}
        </InputMask>
      ) : (
        <InputSC {...input} {...newFieldProps} autoComplete={autoComplete} />
      )}
      {description && (
        <label htmlFor={id}>{t ? t(description) : description}</label>
      )}
    </>
  );
};

export default FieldInput;
