import React from 'react';

import FormidableContext, { FormidableProvider } from './FormidableContext';

export { Dispatch } from 'redux';
export {
  connect,
  useDispatch,
  useSelector,
  DispatchProp,
  useStore,
} from 'react-redux';

export {
  change,
  Field,
  FieldArray,
  DecoratedFormProps,
  formValueSelector,
  SubmissionError,
  WrappedFieldProps,
  InjectedFormProps,
  reduxForm,
  FormSection,
  Validator,
  WrappedFieldArrayProps,
} from 'redux-form';

export const print = (): void => {
  console.info('Bonjour tout le monde !! La vie est formidable !!');
};

export { default as Data, DataProps, DataArray } from './components/Data';
export { default as DataField, DataFieldProps } from './components/Data/Field';
export { DataFieldAsyncSelectProps } from './components/Data/Field/AsyncSelect';
export { default as Form, FormProps } from './components/Form';
export { default as initializeValues } from './utils/initializeValues';
export { addValidator, isEmail, isRequired } from './utils/validators';
export { default as Column } from './components/Column';
export { default as Grid } from './components/Grid';

export { FormidableContext, FormidableProvider };
