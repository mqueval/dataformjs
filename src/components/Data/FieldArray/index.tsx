import React, { VoidFunctionComponent } from 'react';
import { FieldArray } from 'redux-form';

import Group, { GroupProps } from '../../Group';
import { DataFieldProps } from '../Field';
import { DataProps } from '../index';
import DataArrayRender from './Render';

export interface DataFieldArrayProps extends DataFieldProps {
  addButtonProps?: { [key: string]: any };
  bodyProps?: { [key: string]: any };
  datas?: DataProps | DataProps[];
  groupProps?: GroupProps;
  removeButtonProps?: { [key: string]: any };
}

const DataArray: VoidFunctionComponent<DataFieldArrayProps> = ({
  mode,
  name,
  groupProps,
  ...props
}) => {
  if (mode && 'creation' === mode) {
    return <div>array : {name}</div>;
  }

  const WrapperGroup = groupProps ? Group : React.Fragment;

  return (
    <WrapperGroup {...groupProps}>
      <FieldArray component={DataArrayRender} name={name} props={props} />
    </WrapperGroup>
  );
};

export default DataArray;
