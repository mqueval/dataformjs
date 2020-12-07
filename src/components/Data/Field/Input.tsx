import React, { FC, useContext } from 'react';
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
}

const FieldInput: FC<WrappedFieldProps & DataFieldInputProps> = ({
  className,
  description,
  disabled,
  id,
  input,
  options,
  placeholder,
  type = 'text',
  meta: { error, touched },
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <DataFieldInputSC className={className}>
      <InputSC
        {...input}
        as={sc && sc.input}
        disabled={disabled}
        id={id}
        placeholder={t && placeholder ? t(placeholder) : placeholder}
        status={touched && error ? 'error' : undefined}
        type={type}
      />
      {description && (
        <label htmlFor={id}>{t ? t(description) : description}</label>
      )}
    </DataFieldInputSC>
  );
};

export default FieldInput;
