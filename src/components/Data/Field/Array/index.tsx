import React, { VoidFunctionComponent } from 'react';
import { FieldArray } from 'redux-form';

import { DataProps } from '../../index';
import DataArrayRender from './Render';

export interface DataArrayProps extends DataProps {
  addButtonProps?: { [key: string]: any };
  bodyProps?: { [key: string]: any };
  datas?: DataProps[];
  name: string;
  removeButtonProps?: { [key: string]: any };
}

const DataArray: VoidFunctionComponent<DataArrayProps> = ({
  mode,
  name,
  ...props
}) => {
  if (mode && 'creation' === mode) {
    return <div>array : {name}</div>;
  }

  return <FieldArray component={DataArrayRender} name={name} props={props} />;
};

export default DataArray;
