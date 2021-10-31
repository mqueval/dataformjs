import FormidableContext, { FormidableProvider } from './FormidableContext';

export {
  connect,
  DispatchProp,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux';
export { AnyAction, compose, Dispatch, Store } from 'redux';
export {
  change,
  DecoratedFormProps,
  destroy,
  Field,
  FieldArray,
  FieldArrayFieldsProps,
  FormSection,
  formValueSelector,
  InjectedFormProps,
  reduxForm,
  reset,
  SubmissionError,
  submit,
  Validator,
  WrappedFieldArrayProps,
  WrappedFieldProps,
} from 'redux-form';

export const print = (): void => {
  console.info('Bonjour tout le monde !! La vie est formidable !!');
};

export { default as Column } from './components/Column';
export { default as Columns } from './components/Columns';
export { default as Data, DataArray, DataProps } from './components/Data';
export { DataArrayProps } from './components/Data/Array';
export { default as DataField, DataFieldProps } from './components/Data/Field';
export { DataFieldInputProps } from './components/Data/Field/Input';
export { default as Form, FormActionProps, FormProps } from './components/Form';
export { default as Grid } from './components/Grid';
export { default as Group } from './components/Group';
export { default as Icon } from './components/Icon';
export { default as Wizard, WizardProps } from './components/Wizard';
export { default as convertParams } from './utils/convertParams';
export { default as initializeValues } from './utils/initializeValues';
export { addValidator, isEmail, isRequired } from './utils/validators';

export { FormidableContext, FormidableProvider };
