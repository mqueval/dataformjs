import React, {
  FC,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useContext,
} from 'react';

import { DataFieldProps, FormidableContext } from '../../index';
import DataCondition, { DataConditionProps } from './Condition';
import DataField from './Field';
import DataArray from './FieldArray';
import DataSection, { DataSectionProps } from './Section';
import Tabs, { DataTabsProps } from './Tabs';
import DataWithChildren, { DataWithChildrenProps } from './WithChildren';

export interface WrapperProps {
  addBeforeOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  componentType: string;
  formName: string;
  position: string;
  name?: string;
  editOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export interface DataProps {
  actions?: any;
  actionsProps?: { [key: string]: any };
  className?: string;
  customInfos?: ReactNode;
  customInfosProps?: { [key: string]: any };
  componentType: string;
  formName?: string;
  formValues?: { [key: string]: any };
  mode?: 'creation';
  name?: string;
  params?: { [key: string]: any };
  position?: string;
  title?: string;
  wrapper?: FC<WrapperProps>;
  wrapperFunc?: {
    addBeforeOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
    editOnClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
  };
}

const Data: FC<DataProps> = props => {
  const { componentType, wrapper, wrapperFunc } = props;
  let datas;
  let name;
  const { extendData } = useContext(FormidableContext);

  let Component: ReactElement | null = null;

  if (extendData) {
    Component = extendData(props);
  }

  if (!Component) {
    switch (componentType) {
      case 'array': {
        name = (props as DataFieldProps).name;
        if (!name) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
          );
        }
        Component = <DataArray {...props} name={name} />;

        break;
      }

      case 'box':
      case 'flex':
      case 'group':
      case 'grid': {
        datas = (props as DataWithChildrenProps).datas;
        if (!datas) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
          );
        } else {
          Component = <DataWithChildren {...props} datas={datas} />;
        }

        break;
      }

      case 'condition': {
        const { test } = props as DataConditionProps;
        datas = (props as DataConditionProps).datas;
        if (!datas) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
          );
        } else if (!props.formName) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : formName obligatoire`}</div>
          );
        } else if (!test) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : test obligatoire`}</div>
          );
        } else {
          Component = <DataCondition {...props} datas={datas} test={test} />;
        }

        break;
      }

      case 'select': {
        name = (props as DataFieldProps).name;
        if (!name) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
          );
        } else {
          Component = (
            <DataField {...props} componentType="select" name={name} />
          );
        }

        break;
      }

      case 'section': {
        name = (props as DataFieldProps).name;
        datas = (props as DataSectionProps).datas;
        if (!name) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
          );
        } else if (!datas) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
          );
        } else {
          Component = <DataSection {...props} datas={datas} name={name} />;
        }

        break;
      }

      case 'tabs': {
        datas = (props as DataTabsProps).datas;
        if (!datas) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
          );
        } else {
          Component = <Tabs {...(props as DataTabsProps)} datas={datas} />;
        }

        break;
      }

      case 'textarea':
        name = (props as DataFieldProps).name;
        if (!name) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
          );
        } else {
          Component = (
            <DataField {...props} componentType="textarea" name={name} />
          );
        }

        break;

      case 'hidden':
      case 'input': {
        name = (props as DataFieldProps).name;
        if (!name) {
          Component = (
            <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
          );
        } else {
          Component = (
            <DataField {...props} componentType={componentType} name={name} />
          );
        }

        break;
      }

      default: {
        Component = (
          <div>{`${componentType} : ce type de composant n'est pas pris en charge`}</div>
        );
      }
    }
  }

  const Wrapper = wrapper;

  return Wrapper && props.formName && props.position ? (
    <Wrapper
      componentType={componentType}
      formName={props.formName}
      name={name}
      position={props.position}
      {...wrapperFunc}
    >
      {Component}
    </Wrapper>
  ) : (
    Component
  );
};

export default Data;

export { DataArray };
