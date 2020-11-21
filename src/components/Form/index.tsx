import hash from 'object-hash';
import React, { FC } from 'react';

import Data, { DataProps } from '../Data';
import FormRender from './Render';

interface FormProps {
  className?: string;
  datas?: DataProps | DataProps[];
  initialValues?: { [key: string]: any };
  name: string;
  onSubmit: (values: any) => void;
  params?: { [key: string]: any };
  submitLabel?: string;
  validate?: (values: any, props: any) => any;
}

const Form: FC<FormProps> = ({
  children,
  className,
  datas,
  initialValues,
  name,
  onSubmit,
  params,
  submitLabel,
  validate,
}) => {
  const newDatas: DataProps[] | undefined =
    datas && !Array.isArray(datas) ? [datas] : datas;

  console.info('Form formName', name);

  return (
    <FormRender
      className={className}
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
