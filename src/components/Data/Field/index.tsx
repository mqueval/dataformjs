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
const InputGroupItemSC = styled.div``;

export interface DataFieldProps extends DataProps {
  componentType: string;
  column?: boolean;
  columnProps?: { [key: string]: any };
  customAction?: ReactElement | ReactElement[];
  customActionProps?: { [key: string]: any };
  customBottom?: ReactElement | ReactElement[];
  customBottomProps?: { [key: string]: any };
  customTop?: ReactElement | ReactElement[];
  customTopProps?: { [key: string]: any };
  disabled?: boolean;
  fieldProps?: { [key: string]: any };
  handleOnChange?: (props: {
    change?: (formName: string, name: string, value: any) => void;
    event?:
      | SyntheticEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      | any;
    name?: string;
    value?: any;
  }) => any;
  handleOnBlur?: (props: {
    event?: SyntheticEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >;
    name?: string;
    value?: any;
  }) => void;
  id?: string;
  label?: string;
  labelShow?: boolean;
  message?: string;
  name: string;
  options?: {
    disabled?: boolean;
    label: string;
    params?: { [key: string]: any };
    value: string | number;
    id?: string;
  }[];
  optionsProps?: { [key: string]: any };
  params?: { [key: string]: any };
  placeholder?: string;
  required?: boolean;
  templateProps?: { [key: string]: any };
  type?: string;
  validate?: Validator | Validator[]; // TODO @deprecated
  wrapperProps?: { [key: string]: any };
}

const DataField: FC<
  DataFieldAsyncSelectProps<any> | DataFieldInputProps | DataFieldProps
> = ({
  className,
  column,
  columnProps,
  fieldProps,
  optionsProps,
  templateProps,
  validate,
  wrapperProps,
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
        columnProps={columnProps}
        id={newId}
        wrapperProps={wrapperProps}
      >
        <InputGroupSC
          as={sc && sc.inputGroup}
          {...optionsProps}
          role="radiogroup"
        >
          {options.map(option => (
            <InputGroupItemSC key={option.value} as={sc && sc.inputGroupItem}>
              <FieldForm
                fieldProps={fieldProps}
                templateProps={templateProps}
                {...props}
                className={className}
                component={DataFieldInput}
                description={option.label}
                descriptionParams={option.params}
                id={option.id || `${newId}_${option.value}`}
                validate={newValidate}
                value={option.value}
              />
            </InputGroupItemSC>
          ))}
        </InputGroupSC>
      </DataFieldWrapper>
    );
  }

  return (
    <DataFieldWrapper
      {...props}
      column={column}
      columnProps={columnProps}
      id={newId}
      wrapperProps={wrapperProps}
    >
      <FieldForm
        {...props}
        className={className}
        component={DataFieldRender}
        fieldProps={fieldProps}
        id={newId}
        templateProps={templateProps}
        validate={newValidate}
      />
    </DataFieldWrapper>
  );
};

export default DataField;
