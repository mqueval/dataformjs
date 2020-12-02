import React, { FC, ReactElement, SyntheticEvent } from 'react';
import { Field as FieldForm, Validator } from 'redux-form';

import { addValidator, isEmail, isRequired } from '../../../utils/validators';
import { DataProps } from '../index';
import { DataFieldAsyncSelectProps } from './AsyncSelect';
import DataFieldRender from './Render';

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
  name: string;
  params?: { [key: string]: any };
  placeholder?: string;
  required?: boolean;
  type?: string;
  validate?: Validator | Validator[];
}

const DataField: FC<DataFieldAsyncSelectProps<any> | DataFieldProps> = ({
  validate,
  ...props
}) => {
  const { required, type } = props;
  let newValidate =
    validate && !Array.isArray(validate) ? [validate] : validate;

  if (required) {
    newValidate = addValidator(isRequired, newValidate);
  }

  if ('email' === type) {
    newValidate = addValidator(isEmail, newValidate);
  }

  return (
    <FieldForm component={DataFieldRender} {...props} validate={newValidate} />
  );
};

export default DataField;
