import hash from 'object-hash';
import React, { FC, ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';

import initializeValues from '../../utils/initializeValues';
import Data, { DataProps } from '../Data';
import FormRender from './Render';

export interface FormProps {
  asyncChangeFields?: string[];
  asyncValidate?: (
    values: FormData,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, any>,
    blurredField: string,
  ) => Promise<any>;
  cancelIcon?: ReactNode;
  cancelLabel?: string;
  cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  cancelStatus?: string;
  className?: string;
  datas?: DataProps | DataProps[];
  destroyOnUnmount?: boolean;
  enableReinitialize?: boolean;
  forceUnregisterOnUnmount?: boolean;
  hideSubmitButton?: boolean;
  id?: string;
  initialValues?: { [key: string]: any };
  isSubmissive?: boolean;
  name: string;
  onChange?(
    values: Partial<FormData>,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, any>,
    previousValues: Partial<FormData>,
  ): void;
  onSubmit: (values?: any) => void;
  params?: { [key: string]: any };
  submitIcon?: ReactNode;
  submitLabel?: string;
  title?: string;
  touchOnChange?: boolean;
  validate?: (values: any, props: any) => any;
}

const Form: FC<FormProps> = ({
  asyncChangeFields,
  asyncValidate,
  cancelIcon,
  cancelLabel,
  cancelOnClick,
  cancelStatus,
  children,
  className,
  datas,
  destroyOnUnmount,
  enableReinitialize,
  forceUnregisterOnUnmount,
  hideSubmitButton,
  id,
  initialValues,
  isSubmissive,
  name,
  onChange,
  onSubmit,
  params,
  submitIcon,
  submitLabel,
  touchOnChange,
  validate,
}) => {
  const newDatas: DataProps[] | undefined =
    datas && !Array.isArray(datas) ? [datas] : datas;

  return (
    <FormRender
      asyncChangeFields={asyncChangeFields}
      asyncValidate={asyncValidate}
      cancelIcon={cancelIcon}
      cancelLabel={cancelLabel}
      cancelOnClick={cancelOnClick}
      cancelStatus={cancelStatus}
      className={className}
      destroyOnUnmount={destroyOnUnmount}
      enableReinitialize={enableReinitialize}
      forceUnregisterOnUnmount={forceUnregisterOnUnmount}
      hideSubmitButton={hideSubmitButton}
      id={id}
      initialValues={initialValues || (newDatas && initializeValues(newDatas))}
      isSubmissive={isSubmissive}
      name={name}
      onChange={onChange}
      onSubmit={onSubmit}
      submitIcon={submitIcon}
      submitLabel={submitLabel}
      touchOnChange={touchOnChange}
      validate={validate}
    >
      {newDatas &&
        newDatas.map((props: DataProps) => (
          <Data key={hash(props)} {...props} formName={name} params={params} />
        ))}
      {children}
    </FormRender>
  );
};

export default Form;
