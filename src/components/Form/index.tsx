import hash from 'object-hash';
import React, { FC, ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';

import Data, { DataProps } from '../Data';
import FormRender from './Render';

export interface FormProps<P> {
  cancelIcon?: ReactNode;
  cancelLabel?: string;
  cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
  datas?: DataProps | DataProps[];
  destroyOnUnmount?: boolean;
  enableReinitialize?: boolean;
  forceUnregisterOnUnmount?: boolean;
  id?: string;
  initialValues?: { [key: string]: any };
  isSubmissive?: boolean;
  name: string;
  onChange?(
    values: Partial<FormData>,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, P>,
    previousValues: Partial<FormData>,
  ): void;
  onSubmit: (values?: any) => void;
  params?: { [key: string]: any };
  submitIcon?: ReactNode;
  submitLabel?: string;
  validate?: (values: any, props: any) => any;
}

const Form: FC<FormProps<any>> = ({
  cancelIcon,
  cancelLabel,
  cancelOnClick,
  children,
  className,
  datas,
  destroyOnUnmount,
  enableReinitialize,
  forceUnregisterOnUnmount,
  id,
  initialValues,
  isSubmissive,
  name,
  onChange,
  onSubmit,
  params,
  submitIcon,
  submitLabel,
  validate,
}) => {
  const newDatas: DataProps[] | undefined =
    datas && !Array.isArray(datas) ? [datas] : datas;

  return (
    <FormRender
      cancelIcon={cancelIcon}
      cancelLabel={cancelLabel}
      cancelOnClick={cancelOnClick}
      className={className}
      destroyOnUnmount={destroyOnUnmount}
      enableReinitialize={enableReinitialize}
      forceUnregisterOnUnmount={forceUnregisterOnUnmount}
      id={id}
      initialValues={initialValues}
      isSubmissive={isSubmissive}
      name={name}
      onChange={onChange}
      onSubmit={onSubmit}
      submitIcon={submitIcon}
      submitLabel={submitLabel}
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
