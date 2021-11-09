import styled from '@emotion/styled';
import hash from 'object-hash';
import React, { FC, SyntheticEvent, useContext } from 'react';
import { FormSection, WrappedFieldArrayProps } from 'redux-form';

import { DataFieldProps, FormidableContext } from '../../../index';
import initializeValues from '../../../utils/initializeValues';
import Field from '../Field';
import Data from '../index';
import { DataWithChildrenProps } from '../WithChildren';
import { DataFieldArrayProps } from './index';

const ArraySC = styled.div``;

const ButtonSC = styled.button<{
  iconLeft?: any;
  size?: string;
  status?: string;
}>``;

const DataArrayRender: FC<
  WrappedFieldArrayProps & Omit<DataFieldArrayProps, 'name'>
> = ({
  addButtonProps,
  bodyProps,
  className,
  customInfos,
  customInfosProps,
  datas,
  fields,
  formName,
  formValues,
  params,
  removeButtonProps,
}) => {
  const { sc, t } = useContext(FormidableContext);
  const newDatas = datas && !Array.isArray(datas) ? [datas] : datas;

  // useEffect(() => {
  //   if (0 === fields.length) {
  //     fields.push(newDatas ? initializeValues(newDatas) : '');
  //   }
  // }, [newDatas, fields]);

  const handleAddButtonOnClick = (): void => {
    fields.push(newDatas ? initializeValues(newDatas) : '');
  };

  const handleRemoveButtonOnClick = (
    event: SyntheticEvent<HTMLButtonElement>,
  ): void => {
    const index = event.currentTarget.getAttribute('data-index');

    if (index) {
      fields.remove(parseInt(index, 10));
    }
  };

  let addButtonPosition = 'top';
  let addButtonLabel;
  if (addButtonProps) {
    if (addButtonProps.position) {
      addButtonPosition = addButtonProps.position;
    }
    addButtonLabel = addButtonProps.label;
  }

  return (
    <ArraySC className={className}>
      {'top' === addButtonPosition && addButtonProps && (
        <ButtonSC
          as={sc && sc.button}
          onClick={handleAddButtonOnClick}
          {...addButtonProps}
        >
          {t && addButtonLabel ? t(addButtonLabel) : addButtonLabel}
        </ButtonSC>
      )}

      {fields &&
        fields.map((field, index) => {
          const removeCmp = removeButtonProps && (
            <ButtonSC
              as={sc && sc.button}
              data-index={index}
              onClick={handleRemoveButtonOnClick}
              {...removeButtonProps}
            >
              {t && removeButtonProps.label
                ? t(removeButtonProps.label)
                : removeButtonProps.label}
            </ButtonSC>
          );

          if (newDatas && newDatas.length > 0) {
            if (
              newDatas.length > 1 ||
              (newDatas[0] as DataWithChildrenProps).datas ||
              (newDatas[0] as DataFieldProps).name
            ) {
              return (
                <FormSection
                  key={`${field}_${hash({
                    ...newDatas,
                    datas: null,
                    params: null,
                  })}`}
                  data-index={index}
                  name={field}
                  {...bodyProps}
                >
                  {newDatas.map(value => (
                    <Data
                      key={`${field}_${hash(value)}`}
                      {...value}
                      customInfosProps={customInfosProps}
                      formName={formName}
                      formValues={formValues}
                      params={{
                        ...params,
                        index,
                        count: index + 1,
                        name: field,
                      }}
                    />
                  ))}
                  {customInfos}
                  {removeCmp}
                </FormSection>
              );
            }

            return (
              <div key={field} data-index={index} {...bodyProps}>
                <Data
                  {...newDatas[0]}
                  formName={formName}
                  formValues={formValues}
                  name={field}
                  params={{
                    ...params,
                    name: field,
                  }}
                />
                {customInfos}
                {removeCmp}
              </div>
            );
          }

          return (
            <div key={field} data-index={index} {...bodyProps}>
              <Field
                componentType="input"
                formName={formName}
                formValues={formValues}
                name={field}
                params={{
                  ...params,
                  name: field,
                }}
              />
              {customInfos}
              {removeCmp}
            </div>
          );
        })}

      {'bottom' === addButtonPosition && (
        <ButtonSC
          as={sc && sc.button}
          onClick={handleAddButtonOnClick}
          {...addButtonProps}
        >
          {t && addButtonLabel ? t(addButtonLabel) : addButtonLabel}
        </ButtonSC>
      )}
    </ArraySC>
  );
};

export default DataArrayRender;
