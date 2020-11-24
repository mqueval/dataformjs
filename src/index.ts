import React from 'react';

import FormidableContext, { FormidableProvider } from './FormidableContext';

export { useDispatch, useSelector } from 'react-redux';

export { change, Field, SubmissionError, WrappedFieldProps } from 'redux-form';

export const print = (): void => {
  console.info('Bonjour tout le monde !! La vie est formidable !!');
};

export { default as Data, DataProps } from './components/Data';
export { default as DataField, DataFieldProps } from './components/Data/Field';
export { DataFieldAsyncSelectProps } from './components/Data/Field/AsyncSelect';
export { default as Form } from './components/Form';
export { default as initializeValues } from './utils/initializeValues';
export { addValidator, isEmail, isRequired } from './utils/validators';

export { FormidableContext, FormidableProvider };
