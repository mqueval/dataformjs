import hash from 'object-hash';
import React, { FC, ReactNode, useContext } from 'react';

import { FormidableContext } from '../../index';
import Column from '../Column';
import Columns from '../Columns';
import Grid from '../Grid';
import Group from '../Group';
import Rows from '../Rows';
import Tabs, { TabsProps } from '../Tabs';
import DataArray from './Array';
import DataCondition, { DataConditionTestProps } from './Condition';
import DataField from './Field';
import DataSearchAndForm from './Search+Form';
import DataSection from './Section';
import DataValues from './Values';

export interface DataProps {
  actions?: any;
  actionsProps?: { [key: string]: any };
  className?: string;
  customInfos?: ReactNode;
  customInfosProps?: { [key: string]: any };
  componentType?: string;
  datas?: DataProps[];
  formName?: string;
  formValues?: { [key: string]: any };
  grid?: boolean;
  gridClassName?: string;
  label?: string;
  name?: string;
  params?: { [key: string]: any };
  required?: boolean;
  title?: string;
  test?: DataConditionTestProps | DataConditionTestProps[];
}

const Data: FC<
  DataProps & {
    formName: string;
  }
> = ({ datas, formName, formValues, ...props }) => {
  const { componentType, test, name, params } = props;
  const { extendData } = useContext(FormidableContext);

  if (!componentType) {
    return <div>erreur de paramètre : componentType obligatoire</div>;
  }

  if (extendData) {
    const result = extendData({
      ...props,
      datas,
      formName,
      formValues,
      params,
    });

    if (result) {
      return result;
    }
  }

  switch (componentType) {
    case 'array': {
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      // if (!datas) {
      //   return (
      //     <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
      //   );
      // }

      return (
        <DataArray
          {...props}
          datas={datas}
          formName={formName}
          formValues={formValues}
          name={name}
          params={params}
        />
      );
    }

    case 'column': {
      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }

      return (
        <Column {...props}>
          {datas &&
            datas.length > 0 &&
            datas.map(data => (
              <Data
                key={`${hash(data)}`}
                {...data}
                formName={formName}
                formValues={formValues}
                params={params}
              />
            ))}
        </Column>
      );
    }

    case 'columns': {
      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }

      return (
        <Columns {...props}>
          {datas &&
            datas.length > 0 &&
            datas.map(data => (
              <Data
                key={hash(data)}
                {...data}
                formName={formName}
                formValues={formValues}
                params={params}
              />
            ))}
        </Columns>
      );
    }

    case 'condition': {
      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }
      if (!test) {
        return (
          <div>{`${componentType} : erreur de paramètre : test obligatoire`}</div>
        );
      }
      if (!formName) {
        return (
          <div>{`${componentType} : erreur de paramètre : formName obligatoire`}</div>
        );
      }

      return (
        <DataCondition
          {...props}
          datas={datas}
          formName={formName}
          formValues={formValues}
          test={test}
        />
      );
    }

    case 'grid': {
      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }

      return (
        <Grid {...props}>
          {datas &&
            datas.length > 0 &&
            datas.map(data => (
              <Data
                key={hash(data)}
                {...data}
                formName={formName}
                formValues={formValues}
                params={params}
              />
            ))}
        </Grid>
      );
    }

    case 'group': {
      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }

      return (
        <Group {...props}>
          {datas &&
            datas.length > 0 &&
            datas.map(data => (
              <Data
                key={hash(data)}
                {...data}
                formName={formName}
                formValues={formValues}
                params={params}
              />
            ))}
        </Group>
      );
    }

    case 'rows': {
      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }

      return (
        <Rows {...props}>
          {datas &&
            datas.length > 0 &&
            datas.map(data => (
              <Data
                key={hash(data)}
                {...data}
                formName={formName}
                formValues={formValues}
                params={params}
              />
            ))}
        </Rows>
      );
    }

    case 'search+form': {
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return (
        <DataSearchAndForm
          {...props}
          formName={formName}
          formValues={formValues}
          name={name}
        />
      );
    }

    case 'select': {
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return (
        <DataField
          {...props}
          componentType="select"
          formName={formName}
          formValues={formValues}
          name={name}
        />
      );
    }

    case 'section': {
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return (
        <DataSection
          {...props}
          datas={datas}
          formName={formName}
          formValues={formValues}
          name={name}
          params={params}
        />
      );
    }

    case 'tabs': {
      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }

      return (
        <Tabs
          {...(props as TabsProps)}
          datas={datas}
          formName={formName}
          formValues={formValues}
        />
      );
    }

    case 'textarea':
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return (
        <DataField
          {...props}
          componentType="textarea"
          formName={formName}
          formValues={formValues}
          name={name}
        />
      );

    case 'values': {
      return (
        <DataValues
          {...props}
          datas={datas}
          formName={formName}
          name={name}
          params={params}
        />
      );
    }

    case 'hidden':
    case 'input':
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return (
        <DataField
          {...props}
          componentType={componentType}
          formName={formName}
          formValues={formValues}
          name={name}
        />
      );

    default: {
      return (
        <div>{`${componentType} : ce type de composant n'est pas pris en charge`}</div>
      );
    }
  }
};

export default Data;

export { DataArray };
