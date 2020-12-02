import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
declare const FieldTemplate: FC<WrappedFieldProps & DataFieldProps>;
export default FieldTemplate;
