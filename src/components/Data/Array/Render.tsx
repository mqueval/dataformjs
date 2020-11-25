import hash from 'object-hash';
import React, { FC, useEffect } from 'react';
import { FormSection, WrappedFieldArrayProps } from 'redux-form';

import initializeValues from '../../../utils/initializeValues';
import Button from '../../Button';
import Field from '../Field';
import Data from '../index';
import { DataArrayProps } from './index';

const DataArrayRender: FC<WrappedFieldArrayProps & DataArrayProps> = ({
  addButtonIcon,
  addButtonLabel,
  addButtonPosition,
  datas,
  defaultValue = '',
  fields,
  formName,
  meta,
  params,
}) => {
  useEffect(() => {
    if (0 === fields.length) {
      fields.push(initializeValues(datas));
    }
  }, [datas, fields]);

  if (!datas) {
    return <div>datas obligatoire</div>;
  }

  const handleAddButtonOnClick = (): void => {
    fields.push(initializeValues(datas));
  };

  return (
    <div>
      {'top' === addButtonPosition && (
        <Button iconLeft={addButtonIcon} onClick={handleAddButtonOnClick}>
          {addButtonLabel}
        </Button>
      )}

      {fields &&
        fields.map(field => {
          if (datas && datas.length > 0) {
            if (datas.length > 1 || datas[0].datas) {
              return (
                <FormSection key={`${field}_${hash(datas)}`} name={field}>
                  {datas.map(value => (
                    <Data
                      key={`${field}_${hash(value)}`}
                      {...value}
                      formName={formName}
                      params={params}
                    />
                  ))}
                </FormSection>
              );
            }

            return (
              <Data
                key={field}
                {...datas[0]}
                formName={formName}
                name={field}
                params={params}
              />
            );
          }

          return (
            <Field
              key={field}
              componentType="input"
              formName={formName}
              name={field}
            />
          );
        })}

      {'bottom' === addButtonPosition && (
        <Button iconLeft={addButtonIcon} onClick={handleAddButtonOnClick}>
          {addButtonLabel}
        </Button>
      )}
    </div>
  );
};

export default DataArrayRender;
