import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const DataFieldInputSC = styled.div.attrs(props => ({
  className: props.className || 'flex items-center',
}))``;
const InputSC = styled.input``;

export interface DataFieldInputProps extends DataFieldProps {
  description?: string;
  type?: string;
}

const FieldInput: FC<WrappedFieldProps &
  DataFieldInputProps & {
    id: string;
  }> = ({
  className,
  description,
  disabled,
  id,
  input,
  placeholder,
  type = 'text',
  meta: { error, touched },
}) => {
  const { t, theme } = useContext(FormidableContext);

  // if (!type) {
  //   return <div>input : erreur de paramètre : type obligatoire</div>;
  // }

  return (
    <DataFieldInputSC className={className}>
      <InputSC
        {...input}
        as={theme && theme.input}
        disabled={disabled}
        id={id}
        placeholder={t && placeholder ? t(placeholder) : placeholder}
        theme={touched && error ? 'error' : null}
        type={type}
      />
      {description && (
        <label htmlFor={id}>{t ? t(description) : description}</label>
      )}
    </DataFieldInputSC>
  );
};

export default FieldInput;
