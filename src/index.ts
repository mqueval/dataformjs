import FormidableContext, { FormidableProvider } from './FormidableContext';

export { createStyles } from './core/functions';
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

export { default as Box } from './components/Box';
export {
  default as Data,
  DataArray,
  DataProps,
  WrapperProps,
} from './components/Data';
export { default as DataField, DataFieldProps } from './components/Data/Field';
export { DataFieldInputProps } from './components/Data/Field/Render/Input';
export { DataFieldArrayProps } from './components/Data/FieldArray';
export {
  default as DataSection,
  DataSectionProps,
} from './components/Data/Section';
export {
  default as DataWithChildren,
  DataWithChildrenProps,
} from './components/Data/WithChildren';
export { default as Flex } from './components/Flex';
export { default as Form, FormActionProps, FormProps } from './components/Form';
export { default as Grid } from './components/Grid';
export { default as Group } from './components/Group';
export { default as Icon } from './components/Icon';
export { default as Wizard, WizardProps } from './components/Wizard';
export { default as convertParams } from './utils/convertParams';
export { default as initializeValues } from './utils/initializeValues';
export { isEmail, isRequired } from './utils/validators';

export { FormidableContext, FormidableProvider };
