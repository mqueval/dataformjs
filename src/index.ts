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

export {
  default as Data,
  DataArray,
  DataProps,
  WrapperProps,
} from './components/Data';
export { default as Box } from './components/Data/Box';
export { default as DataField, DataFieldProps } from './components/Data/Field';
export { DataArrayProps } from './components/Data/Field/Array';
export { DataFieldInputProps } from './components/Data/Field/Render/Input';
export { default as DataSection } from './components/Data/Section';
export { default as DataWithChildren } from './components/Data/WithChildren';
export { default as Flex } from './components/Flex';
export { default as Form, FormActionProps, FormProps } from './components/Form';
export { default as Grid } from './components/Grid';
export { default as Group } from './components/Group';
export { default as Icon } from './components/Icon';
export { default as Wizard, WizardProps } from './components/Wizard';
export { default as convertParams } from './utils/convertParams';
export { default as initializeValues } from './utils/initializeValues';
export { addValidator, isEmail, isRequired } from './utils/validators';

export { FormidableContext, FormidableProvider };
