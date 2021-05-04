import classnames from 'classnames';
import React, { FC, ReactElement, SyntheticEvent, useContext } from 'react';
import { Field as FieldForm, Validator } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import {
  addValidator,
  isDate,
  isEmail,
  isRequired,
  isTime,
} from '../../../utils/validators';
import { DataProps } from '../index';
import { DataFieldAsyncSelectProps } from './AsyncSelect';
import DataFieldInput, { DataFieldInputProps } from './Input';
import DataFieldRender from './Render';
import DataFieldWrapper from './Wrapper';

const InputGroupSC = styled.div``;

export interface DataFieldProps extends DataProps {
  componentType: string;
  column?: boolean;
  columnOptions?: { [key: string]: any };
  customBottom?: ReactElement | ReactElement[];
  customBottomClassName?: string;
  customTop?: ReactElement | ReactElement[];
  customTopClassName?: string;
  disabled?: boolean;
  fieldClassName?: string;
  handleOnChange?: (props: {
    change?: (formName: string, name: string, value: any) => void;
    event?: SyntheticEvent<HTMLInputElement> | any;
    name?: string;
    value?: any;
  }) => any;
  id?: string;
  label?: string;
  labelShow?: boolean;
  message?: string;
  name: string;
  options?: { label: string; value: string | number; id?: string }[];
  optionsClassName?: string;
  params?: { [key: string]: any };
  placeholder?: string;
  required?: boolean;
  templateClassName?: string;
  type?: string;
  validate?: Validator | Validator[]; // TODO @deprecated
  wrapperClassName?: string;
}

const DataField: FC<
  DataFieldAsyncSelectProps<any> | DataFieldInputProps | DataFieldProps
> = ({
  className,
  column,
  columnOptions,
  fieldClassName,
  optionsClassName,
  templateClassName,
  validate,
  wrapperClassName,
  ...props
}) => {
  const { sc } = useContext(FormidableContext);

  const { componentType, id, name, options, required, params, type } = props;

  const newId =
    id || `${params && params.name ? `${params.name}.` : ''}${name}`;
  let newValidate =
    validate && !Array.isArray(validate) ? [validate] : validate;

  if (required) {
    newValidate = addValidator(isRequired, newValidate);
  }

  switch (type) {
    case 'date': {
      newValidate = addValidator(isDate, newValidate);
      break;
    }

    case 'email': {
      newValidate = addValidator(isEmail, newValidate);
      break;
    }

    case 'time': {
      newValidate = addValidator(isTime, newValidate);
      break;
    }

    default:
  }

  if ('radio' === type && 'input' === componentType) {
    if (!options || 0 === options.length) {
      return <div>input : erreur de paramètre : options obligatoire</div>;
    }

    return (
      <DataFieldWrapper
        {...props}
        column={column}
        columnOptions={columnOptions}
        id={newId}
        wrapperClassName={wrapperClassName}
      >
        <InputGroupSC
          as={sc && sc.inputGroup}
          className={optionsClassName}
          role="radiogroup"
        >
          {options.map(option => (
            <FieldForm
              key={option.value}
              fieldClassName={fieldClassName}
              templateClassName={templateClassName}
              {...props}
              className={classnames(
                '"grid grid-cols-2 items-center"',
                className,
              )}
              component={DataFieldInput}
              description={option.label}
              id={option.id || `${newId}_${option.value}`}
              validate={newValidate}
              value={option.value}
            />
          ))}
        </InputGroupSC>
      </DataFieldWrapper>
    );
  }

  return (
    <DataFieldWrapper
      {...props}
      column={column}
      columnOptions={columnOptions}
      id={newId}
      wrapperClassName={wrapperClassName}
    >
      <FieldForm
        {...props}
        className={className}
        component={DataFieldRender}
        fieldClassName={fieldClassName}
        id={newId}
        templateClassName={templateClassName}
        validate={newValidate}
      />
    </DataFieldWrapper>
  );
};

export default DataField;
