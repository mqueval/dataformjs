import styled from '@emotion/styled';
import React, { FC, ReactElement, SyntheticEvent, useContext } from 'react';
import { Field as FieldForm, Validator } from 'redux-form';

import { FormidableContext } from '../../../index';
import {
  addValidator,
  isDate,
  isEmail,
  isRequired,
  isTime,
} from '../../../utils/validators';
import { BoxProps } from '../../Box';
import { DataProps } from '../index';
import DataFieldRender from './Render';
import DataFieldInput, { DataFieldInputProps } from './Render/Input';
import { DataFieldSelectProps } from './Render/Select';
import DataFieldWrapper from './Wrapper';

const InputGroupSC = styled.div``;
const InputGroupItemSC = styled.div``;

export interface DataFieldProps extends DataProps {
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
  placeholder?: string;
  required?: boolean;
  templateProps?: { [key: string]: any };
  type?: string;
  validate?: Validator | Validator[]; // TODO @deprecated
  wrapperProps?: BoxProps;
}

const DataField: FC<
  DataFieldSelectProps | DataFieldInputProps | DataFieldProps
> = ({
  className,
  fieldProps,
  mode,
  templateProps,
  validate,
  wrapperProps,
  ...props
}) => {
  const { sc } = useContext(FormidableContext);

  if (mode && 'creation' === mode) {
    return (
      <div>
        {props.componentType} : {props.name}
      </div>
    );
  }

  const { componentType, id, name, required, params, type } = props;

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
    const { options, optionsProps } = props as DataFieldInputProps;
    if (!options || 0 === options.length) {
      return <div>input : erreur de paramètre : options obligatoire</div>;
    }

    return (
      <DataFieldWrapper {...props} id={newId} wrapperProps={wrapperProps}>
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
    <DataFieldWrapper {...props} id={newId} wrapperProps={wrapperProps}>
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
