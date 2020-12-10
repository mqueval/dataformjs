import React, { FC, useContext } from 'react';
import InputMask from 'react-input-mask';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const DataFieldInputSC = styled.div`
  display: flex;
  justify-items: center;
`;

const InputSC = styled.input``;

export interface DataFieldInputProps extends DataFieldProps {
  description?: string;
  type?: string;
  mask?: string;
  min?: number | string;
  max?: number | string;
}

const FieldInput: FC<WrappedFieldProps & DataFieldInputProps> = ({
  className,
  description,
  disabled,
  id,
  input,
  placeholder,
  type = 'text',
  mask,
  max,
  meta: { error, touched },
  min,
}) => {
  const { t, sc } = useContext(FormidableContext);

  const fieldProps = {
    disabled,
    id,
    max,
    min,
    as: sc && sc.input,
    placeholder: t && placeholder ? t(placeholder) : placeholder,
    status: touched && error ? 'error' : undefined,
    type: mask ? 'text' : type,
  };

  return (
    <DataFieldInputSC className={className}>
      {mask ? (
        <InputMask mask={mask} {...input}>
          {(inputProps: any) => <InputSC {...inputProps} {...fieldProps} />}
        </InputMask>
      ) : (
        <InputSC {...input} {...fieldProps} />
      )}
      {description && (
        <label htmlFor={id}>{t ? t(description) : description}</label>
      )}
    </DataFieldInputSC>
  );
};

export default FieldInput;
