import hash from 'object-hash';
import React, { FC, SyntheticEvent } from 'react';

import Data, { DataProps } from '../Data';
import FormRender from './Render';

interface FormProps {
  cancelLabel?: string;
  cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
  datas?: DataProps | DataProps[];
  destroyOnUnmount?: boolean;
  enableReinitialize?: boolean;
  forceUnregisterOnUnmount?: boolean;
  id?: string;
  initialValues?: { [key: string]: any };
  name: string;
  onSubmit: (values: any) => void;
  params?: { [key: string]: any };
  submitLabel?: string;
  validate?: (values: any, props: any) => any;
}

const Form: FC<FormProps> = ({
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
  name,
  onSubmit,
  params,
  submitLabel,
  validate,
}) => {
  const newDatas: DataProps[] | undefined =
    datas && !Array.isArray(datas) ? [datas] : datas;

  return (
    <FormRender
      cancelLabel={cancelLabel}
      cancelOnClick={cancelOnClick}
      className={className}
      destroyOnUnmount={destroyOnUnmount}
      enableReinitialize={enableReinitialize}
      forceUnregisterOnUnmount={forceUnregisterOnUnmount}
      id={id}
      initialValues={initialValues}
      name={name}
      onSubmit={onSubmit}
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
