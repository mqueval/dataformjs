import FormidableContext, { FormidableProvider } from './FormidableContext';

export { AnyAction, Dispatch, Store, compose } from 'redux';
export {
  connect,
  useDispatch,
  useSelector,
  DispatchProp,
  useStore,
} from 'react-redux';

export {
  change,
  DecoratedFormProps,
  destroy,
  Field,
  FieldArray,
  FieldArrayFieldsProps,
  FormSection,
  formValueSelector,
  SubmissionError,
  WrappedFieldProps,
  InjectedFormProps,
  reduxForm,
  reset,
  submit,
  Validator,
  WrappedFieldArrayProps,
} from 'redux-form';

export const print = (): void => {
  console.info('Bonjour tout le monde !! La vie est formidable !!');
};

export { default as Columns } from './components/Columns';
export { default as Data, DataProps, DataArray } from './components/Data';
export { default as DataField, DataFieldProps } from './components/Data/Field';
export { DataFieldAsyncSelectProps } from './components/Data/Field/AsyncSelect';
export { DataArrayProps } from './components/Data/Array';
export { default as Form, FormProps, FormActionProps } from './components/Form';
export { default as Group } from './components/Group';
export { default as Icon } from './components/Icon';
export { default as Wizard, WizardProps } from './components/Wizard';
export { default as initializeValues } from './utils/initializeValues';
export { addValidator, isEmail, isRequired } from './utils/validators';
export { default as Column } from './components/Column';
export { default as Grid } from './components/Grid';
export { default as convertParams } from './utils/convertParams';

export { FormidableContext, FormidableProvider };
