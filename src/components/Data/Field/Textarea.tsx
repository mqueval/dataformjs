import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const TextareaSC = styled.textarea``;

const FieldTextarea: FC<WrappedFieldProps &
  DataFieldProps & {
    id: string;
  }> = ({ disabled, id, input, meta: { error, touched }, placeholder }) => {
  const { t, theme } = useContext(FormidableContext);

  return (
    <TextareaSC
      {...input}
      as={theme && theme.textarea}
      disabled={disabled}
      id={id}
      placeholder={t && placeholder ? t(placeholder) : placeholder}
      status={touched && error ? 'error' : null}
    />
  );
};

export default FieldTextarea;
