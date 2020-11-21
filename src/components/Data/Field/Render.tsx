import hash from 'object-hash';
import React, { FC, SyntheticEvent } from 'react';
import { WrappedFieldProps } from 'redux-form';

import FieldAsyncSelect from './AsyncSelect';
import { DataFieldProps } from './index';
import FieldInput from './Input';
import FieldSelect from './Select';
import FieldTemplate from './Template';
import FieldTextarea from './Textarea';

const DataFieldRender: FC<WrappedFieldProps & DataFieldProps> = props => {
  const { componentType, handleOnChange, input } = props;
  const id = hash({ componentType, name: input.name }); // TODO revoir ce code car il change a chaque fois

  const newInput = { ...input };
  const { onChange } = input;
  if (handleOnChange) {
    newInput.onChange = (event: SyntheticEvent<HTMLInputElement>): void => {
      handleOnChange(event, input.name);
      onChange(event);
    };
  }

  if ('hidden' === componentType) {
    return <input {...input} type="hidden" />;
  }

  return (
    <FieldTemplate id={id} {...props}>
      {'async-select' === componentType && (
        <FieldAsyncSelect {...props} id={id} input={newInput} />
      )}

      {'input' === componentType && (
        <FieldInput {...props} id={id} input={newInput} />
      )}

      {'select' === componentType && (
        <FieldSelect {...props} id={id} input={newInput} />
      )}

      {'textarea' === componentType && (
        <FieldTextarea {...props} id={id} input={newInput} />
      )}
    </FieldTemplate>
  );
};

export default DataFieldRender;
