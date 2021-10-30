import styled from '@emotion/styled';
import hash from 'object-hash';
import React, { FC, SyntheticEvent, useContext, useEffect } from 'react';
import { FormSection, WrappedFieldArrayProps } from 'redux-form';

import { FormidableContext } from '../../../index';
import initializeValues from '../../../utils/initializeValues';
import Field from '../Field';
import Data from '../index';
import { DataArrayProps } from './index';

const ButtonSC = styled.button<{
  iconLeft?: any;
  size?: string;
  status?: string;
}>``;

const DataArrayRender: FC<WrappedFieldArrayProps & DataArrayProps> = ({
  addButtonClassName,
  addButtonIcon,
  addButtonId,
  addButtonLabel,
  addButtonPosition,
  addButtonSize,
  addButtonStatus,
  customInfos,
  customInfosProps,
  datas,
  fields,
  formName,
  formValues,
  params,
  removeButtonClassName,
  removeButtonIcon,
  removeButtonLabel,
  removeButtonSize,
  removeButtonStatus,
}) => {
  const { sc, t } = useContext(FormidableContext);

  useEffect(() => {
    if (0 === fields.length) {
      fields.push(datas ? initializeValues(datas) : '');
    }
  }, [datas, fields]);

  // if (!datas) {
  //   return <div>datas obligatoire</div>;
  // }

  const handleAddButtonOnClick = (): void => {
    fields.push(datas ? initializeValues(datas) : '');
  };

  const handleRemoveButtonOnClick = (
    event: SyntheticEvent<HTMLButtonElement>,
  ): void => {
    const index = event.currentTarget.getAttribute('data-index');

    if (index) {
      fields.remove(parseInt(index, 10));
    }
  };

  return (
    <div>
      {'top' === addButtonPosition && (
        <ButtonSC
          as={sc && sc.button}
          className={addButtonClassName}
          iconLeft={addButtonIcon}
          onClick={handleAddButtonOnClick}
          size={addButtonSize}
          status={addButtonStatus}
        >
          {addButtonLabel}
        </ButtonSC>
      )}

      {fields &&
        fields.map((field, index) => {
          const removeCmp = (removeButtonIcon || removeButtonLabel) && (
            <ButtonSC
              as={sc && sc.button}
              className={removeButtonClassName}
              data-index={index}
              iconLeft={removeButtonIcon}
              onClick={handleRemoveButtonOnClick}
              size={removeButtonSize}
              status={removeButtonStatus}
            >
              {t && removeButtonLabel
                ? t(removeButtonLabel)
                : removeButtonLabel}
            </ButtonSC>
          );

          if (datas && datas.length > 0) {
            if (datas.length > 1 || datas[0].datas || datas[0].name) {
              return (
                <FormSection key={`${field}_${hash(datas)}`} name={field}>
                  {datas.map(value => (
                    <Data
                      key={`${field}_${hash(value)}`}
                      {...value}
                      customInfos={
                        <div data-index={index}>
                          {customInfos}
                          {removeCmp}
                        </div>
                      }
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
                </FormSection>
              );
            }

            return (
              <Data
                key={field}
                {...datas[0]}
                customInfos={removeCmp}
                formName={formName}
                formValues={formValues}
                name={field}
                params={{
                  ...params,
                  name: field,
                }}
              />
            );
          }

          return (
            <Field
              key={field}
              componentType="input"
              customInfos={removeCmp}
              formName={formName}
              formValues={formValues}
              name={field}
              params={{
                ...params,
                name: field,
              }}
            />
          );
        })}

      {'bottom' === addButtonPosition && (
        <ButtonSC
          as={sc && sc.button}
          iconLeft={addButtonIcon}
          id={addButtonId}
          onClick={handleAddButtonOnClick}
          size={addButtonSize}
          status={addButtonStatus}
        >
          {t && addButtonLabel ? t(addButtonLabel) : addButtonLabel}
        </ButtonSC>
      )}
    </div>
  );
};

export default DataArrayRender;
