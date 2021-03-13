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
  mask?: string;
  min?: number | string;
  max?: number | string;
  step?: number;
  type?: string;
}

const FieldInput: FC<WrappedFieldProps & DataFieldInputProps> = ({
  className,
  description,
  disabled,
  fieldClassName,
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

  const fieldProps = {
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
    <DataFieldInputSC className={className}>
      {mask ? (
        <InputMask mask={mask} {...input}>
          {(inputProps: any) => (
            <InputSC
              {...inputProps}
              {...fieldProps}
              className={fieldClassName}
            />
          )}
        </InputMask>
      ) : (
        <InputSC {...input} {...fieldProps} className={fieldClassName} />
      )}
      {description && (
        <label htmlFor={id}>{t ? t(description) : description}</label>
      )}
    </DataFieldInputSC>
  );
};

export default FieldInput;
