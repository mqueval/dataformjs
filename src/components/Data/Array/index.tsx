import React, { ReactNode, VoidFunctionComponent } from 'react';
import { FieldArray } from 'redux-form';

import Group from '../../Group';
import { DataProps } from '../index';
import DataArrayRender from './Render';

export interface DataArrayProps extends DataProps {
  addButtonClassName?: string;
  addButtonIcon?: ReactNode | string;
  addButtonId?: string;
  addButtonPosition?: string;
  addButtonLabel?: string;
  addButtonSize?: string;
  addButtonStatus?: string;
  datas: DataProps[];
  defaultValue?: string;
  formName: string;
  group?: boolean;
  groupTitle?: string;
  groupClassName?: string;
  params?: { [key: string]: any };
  removeButtonClassName?: string;
  removeButtonIcon?: ReactNode | string;
  removeButtonLabel?: string;
  removeButtonSize?: string;
  removeButtonStatus?: string;
}

const DataArray: VoidFunctionComponent<
  DataArrayProps & {
    name: string;
  }
> = ({ group, groupTitle, groupClassName, name, ...others }) => {
  if (group) {
    return (
      <Group className={groupClassName} title={groupTitle}>
        <FieldArray component={DataArrayRender} name={name} props={others} />
      </Group>
    );
  }

  return <FieldArray component={DataArrayRender} name={name} props={others} />;
};

export default DataArray;
