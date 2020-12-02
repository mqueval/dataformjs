import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const TextareaSC = styled.textarea``;

const FieldTextarea: FC<WrappedFieldProps & DataFieldProps> = ({
  disabled,
  id,
  input,
  meta: { error, touched },
  placeholder,
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <TextareaSC
      {...input}
      as={sc && sc.textarea}
      disabled={disabled}
      id={id}
      placeholder={t && placeholder ? t(placeholder) : placeholder}
      status={touched && error ? 'error' : null}
    />
  );
};

export default FieldTextarea;
