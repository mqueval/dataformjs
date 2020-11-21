import hash from 'object-hash';
import React, { FC, useContext } from 'react';

import { FormidableContext } from '../../index';
import Column from '../Column';
import Columns from '../Columns';
import Group from '../Group';
import DataArray from './Array';
import DataCondition from './Condition';
import DataField from './Field';
import DataSearchAndForm from './Search+Form';
import DataSection from './Section';

export interface DataProps {
  className?: string;
  componentType?: string;
  datas?: DataProps[];
  label?: string;
  name?: string;
  required?: boolean;
  test?:
    | {
        field: string;
        operator: string;
        value: any;
      }
    | { field: string; operator: string; value: any }[];
}

const Data: FC<DataProps & {
  formName: string;
  params?: { [key: string]: any };
}> = ({ datas, formName, ...props }) => {
  const { componentType, test, name, params } = props;
  const { extendData } = useContext(FormidableContext);

  if (!componentType) {
    return <div>erreur de paramètre : componentType obligatoire</div>;
  }

  if (extendData) {
    const result = extendData({
      ...props,
      formName,
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

      if (!datas) {
        return (
          <div>{`${componentType} : erreur de paramètre : datas obligatoire`}</div>
        );
      }

      return (
        <DataArray
          {...props}
          datas={datas}
          formName={formName}
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
          test={test}
        />
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
                params={params}
              />
            ))}
        </Group>
      );
    }

    case 'search+form': {
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return <DataSearchAndForm {...props} name={name} />;
    }

    case 'select': {
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return <DataField {...props} componentType="select" name={name} />;
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
          name={name}
          params={params}
        />
      );
    }

    case 'textarea':
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return <DataField {...props} componentType="textarea" name={name} />;

    case 'hidden':
    case 'input':
      if (!name) {
        return (
          <div>{`${componentType} : erreur de paramètre : name obligatoire`}</div>
        );
      }

      return <DataField {...props} componentType="input" name={name} />;

    default: {
      return (
        <div>{`${componentType} : ce type de composant n'est pas pris en charge`}</div>
      );
    }
  }
};

export default Data;
