import React, { FC, SyntheticEvent } from 'react';
import { WrappedFieldProps } from 'redux-form';

import { DataFieldProps } from '../index';
import FieldTemplate from '../Template';
import FieldInput from './Input';
import FieldSelect, { DataFieldSelectProps } from './Select';
import FieldTextarea from './Textarea';

const DataFieldRender: FC<WrappedFieldProps & DataFieldProps> = props => {
  const {
    className,
    componentType,
    fieldProps,
    handleOnChange,
    handleOnBlur,
    id,
    input,
    templateProps,
  } = props;

  const newInput = { ...input };
  const { onChange, onBlur } = input;
  if (handleOnChange) {
    newInput.onChange = (
      event: SyntheticEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ): void => {
      handleOnChange({ event, name: input.name });
      onChange(event);
    };
  }

  if (handleOnBlur) {
    newInput.onBlur = (
      event: SyntheticEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ): void => {
      const { value } = event.currentTarget;
      handleOnBlur({ event, value, name: input.name });
      onBlur(event);
    };
  }

  if ('hidden' === componentType) {
    return <input {...input} type="hidden" />;
  }

  let Component;
  switch (componentType) {
    case 'input': {
      Component = (
        <FieldInput
          {...props}
          {...fieldProps}
          className={className}
          input={newInput}
        />
      );
      break;
    }

    case 'select': {
      Component = (
        <FieldSelect
          {...(props as WrappedFieldProps & DataFieldSelectProps)}
          {...fieldProps}
          className={className}
          input={newInput}
        />
      );
      break;
    }

    case 'textarea': {
      Component = (
        <FieldTextarea
          {...props}
          {...fieldProps}
          className={className}
          input={newInput}
        />
      );
      break;
    }

    default:
      return (
        <div>
          {`data field render : erreur de paramètre : ${componentType} n'est pas pris en charge`}
        </div>
      );
  }

  return (
    <FieldTemplate id={id} {...props} {...templateProps}>
      {Component}
    </FieldTemplate>
  );
};

export default DataFieldRender;
