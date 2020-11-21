import React, { ReactElement, VoidFunctionComponent } from 'react';
import { FieldArray } from 'redux-form';

import Group from '../../Group';
import { DataProps } from '../index';
import DataArrayRender from './Render';

export interface DataArrayProps extends DataProps {
  addButtonIcon?: ReactElement;
  addButtonPosition?: string;
  addButtonLabel?: string;
  datas: DataProps[];
  defaultValue?: string;
  formName: string;
  group?: boolean;
  groupClassName?: string;
  params?: { [key: string]: any };
}

const DataArray: VoidFunctionComponent<DataArrayProps & {
  name: string;
}> = ({ group, groupClassName, name, ...others }) => {
  if (group) {
    return (
      <Group className={groupClassName}>
        <FieldArray component={DataArrayRender} name={name} props={others} />
      </Group>
    );
  }

  return <FieldArray component={DataArrayRender} name={name} props={others} />;
};

export default DataArray;
