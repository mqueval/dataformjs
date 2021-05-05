import hash from 'object-hash';
import React, { FC, ReactNode, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps } from 'redux-form';

import initializeValues from '../../utils/initializeValues';
import Data, { DataProps } from '../Data';
import FormRender from './Render';

export interface FormActionProps {
  label?: string;
}

export interface FormDivActionProps {
  className?: string;
  actions: FormActionProps[];
}

export interface FormProps {
  actions?: FormActionProps | FormActionProps[] | FormDivActionProps[];
  asyncChangeFields?: string[];
  asyncValidate?: (
    values: FormData,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, any>,
    blurredField: string,
  ) => Promise<any>;
  bodyClassName?: string;
  cancelClassName?: string;
  cancelIcon?: ReactNode;
  cancelIconColor?: string;
  cancelLabel?: string;
  cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  cancelStatus?: string;
  className?: string;
  datas?: DataProps | DataProps[];
  destroyOnUnmount?: boolean;
  enableReinitialize?: boolean;
  footerClassName?: string;
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
  submitClassName?: string;
  submitIcon?: ReactNode;
  submitIconColor?: string;
  submitIconLeft?: ReactNode;
  submitIconRight?: ReactNode;
  submitIconSize?: number;
  submitLabel?: string;
  title?: string;
  touchOnChange?: boolean;
  validate?: (values: any, props: any) => any;
}

const Form: FC<FormProps> = ({
  actions,
  asyncChangeFields,
  asyncValidate,
  bodyClassName,
  cancelClassName,
  cancelIcon,
  cancelIconColor,
  cancelLabel,
  cancelOnClick,
  cancelStatus,
  children,
  className,
  datas,
  destroyOnUnmount,
  enableReinitialize,
  forceUnregisterOnUnmount,
  footerClassName,
  hideSubmitButton,
  id,
  initialValues,
  isSubmissive,
  name,
  onChange,
  onSubmit,
  params,
  submitClassName,
  submitIcon,
  submitIconColor,
  submitIconLeft,
  submitIconRight,
  submitIconSize,
  submitLabel,
  touchOnChange,
  validate,
}) => {
  const newDatas: DataProps[] | undefined =
    datas && !Array.isArray(datas) ? [datas] : datas;

  return (
    <FormRender
      actions={actions}
      asyncChangeFields={asyncChangeFields}
      asyncValidate={asyncValidate}
      bodyClassName={bodyClassName}
      cancelClassName={cancelClassName}
      cancelIcon={cancelIcon}
      cancelIconColor={cancelIconColor}
      cancelLabel={cancelLabel}
      cancelOnClick={cancelOnClick}
      cancelStatus={cancelStatus}
      className={className}
      destroyOnUnmount={destroyOnUnmount}
      enableReinitialize={enableReinitialize}
      footerClassName={footerClassName}
      forceUnregisterOnUnmount={forceUnregisterOnUnmount}
      hideSubmitButton={hideSubmitButton}
      id={id}
      initialValues={initialValues || (newDatas && initializeValues(newDatas))}
      isSubmissive={isSubmissive}
      name={name}
      onChange={onChange}
      onSubmit={onSubmit}
      submitClassName={submitClassName}
      submitIcon={submitIcon}
      submitIconColor={submitIconColor}
      submitIconLeft={submitIconLeft}
      submitIconRight={submitIconRight}
      submitIconSize={submitIconSize}
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
