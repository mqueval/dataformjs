import React, { FC, SyntheticEvent } from 'react';
import { WrappedFieldProps } from 'redux-form';

import FieldAsyncSelect from './AsyncSelect';
import { DataFieldProps } from './index';
import FieldInput from './Input';
import FieldSelect from './Select';
import FieldTemplate from './Template';
import FieldTextarea from './Textarea';

const DataFieldRender: FC<WrappedFieldProps & DataFieldProps> = props => {
  const {
    className,
    componentType,
    fieldClassName,
    handleOnChange,
    id,
    input,
    templateClassName,
  } = props;

  const newInput = { ...input };
  const { onChange } = input;
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

  if ('hidden' === componentType) {
    return <input {...input} type="hidden" />;
  }

  let Component;
  switch (componentType) {
    case 'async-select': {
      Component = FieldAsyncSelect;
      break;
    }

    case 'input': {
      Component = FieldInput;
      break;
    }

    case 'select': {
      Component = FieldSelect;
      break;
    }

    case 'textarea': {
      Component = FieldTextarea;
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
    <FieldTemplate id={id} {...props} templateClassName={templateClassName}>
      <Component
        {...props}
        className={className}
        fieldClassName={fieldClassName}
        input={newInput}
      />
    </FieldTemplate>
  );
};

export default DataFieldRender;
