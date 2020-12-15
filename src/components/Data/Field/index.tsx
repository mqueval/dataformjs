import hash from 'object-hash';
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
  customBottom?: ReactElement | ReactElement[];
  customBottomClassName?: string;
  customTop?: ReactElement | ReactElement[];
  customTopClassName?: string;
  disabled?: boolean;
  handleOnChange?: (props: {
    change?: (formName: string, name: string, value: any) => void;
    event?: SyntheticEvent<HTMLInputElement> | any;
    name?: string;
    value?: any;
  }) => any;
  id?: string;
  label?: string;
  message?: string;
  name: string;
  options?: { label: string; value: string | number; id?: string }[];
  params?: { [key: string]: any };
  placeholder?: string;
  required?: boolean;
  type?: string;
  validate?: Validator | Validator[];
}

const DataField: FC<
  DataFieldAsyncSelectProps<any> | DataFieldInputProps | DataFieldProps
> = ({ validate, ...props }) => {
  const { sc } = useContext(FormidableContext);

  const { componentType, id, name, options, required, type } = props;
  const newId = id || hash({ componentType, name }); // TODO revoir ce code car il change a chaque fois
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
      <DataFieldWrapper {...props} id={newId}>
        <InputGroupSC
          as={sc && sc.inputGroup}
          className="flex flex-row gap-2"
          role="radiogroup"
        >
          {options.map(option => (
            <FieldForm
              key={option.value}
              {...props}
              className="grid grid-cols-2 items-center"
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
    <DataFieldWrapper {...props} id={newId}>
      <FieldForm
        {...props}
        component={DataFieldRender}
        id={newId}
        validate={newValidate}
      />
    </DataFieldWrapper>
  );
};

export default DataField;
