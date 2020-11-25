import { FC } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { DataFieldProps } from './index';
declare const DataFieldRender: FC<WrappedFieldProps & DataFieldProps>;
export default DataFieldRender;
