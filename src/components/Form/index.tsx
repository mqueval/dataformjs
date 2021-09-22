import { diff } from 'deep-object-diff';
import hash from 'object-hash';
import React, { FC, ReactNode, SyntheticEvent, useState } from 'react';
import { Dispatch } from 'redux';
import { DecoratedFormProps, submit } from 'redux-form';

import initializeValues from '../../utils/initializeValues';
import Data, { DataProps } from '../Data';
import FormRender from './Render';

export interface FormActionProps {
  iconColor?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconSize?: number;
  label?: string;
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => any;
  size?: string;
  status?: string;
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
  autosave?: boolean;
  bodyProps?: { [key: string]: any };
  cancelProps?: { [key: string]: any };
  // cancelClassName?: string;
  // cancelIcon?: ReactNode;
  // cancelIconColor?: string;
  // cancelLabel?: string;
  // cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  // cancelStatus?: string;
  className?: string;
  datas?: DataProps | DataProps[];
  destroyOnUnmount?: boolean;
  enableReinitialize?: boolean;
  footerProps?: { [key: string]: any };
  forceUnregisterOnUnmount?: boolean;
  hideSubmitButton?: boolean;
  id?: string;
  initialValues?: { [key: string]: any };
  isSubmissive?: boolean;
  keepDirtyOnReinitialize?: boolean;
  name: string;
  onChange?(
    values: Partial<FormData>,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, any>,
    previousValues: Partial<FormData>,
  ): void;
  onSubmit: (values?: any) => void;
  params?: { [key: string]: any };
  removePristine?: boolean;
  submitProps?: { [key: string]: any };
  // submitClassName?: string;
  // submitIcon?: ReactNode;
  // submitIconColor?: string;
  // submitIconLeft?: ReactNode;
  // submitIconRight?: ReactNode;
  // submitIconSize?: number;
  // submitLabel?: string;
  title?: string;
  touchOnChange?: boolean;
  validate?: (values: any, props: any) => any;
}

const Form: FC<FormProps> = ({
  actions,
  asyncChangeFields,
  asyncValidate,
  autosave,
  bodyProps,
  cancelProps,
  children,
  className,
  datas,
  destroyOnUnmount,
  enableReinitialize,
  forceUnregisterOnUnmount,
  footerProps,
  hideSubmitButton,
  id,
  initialValues,
  isSubmissive,
  keepDirtyOnReinitialize,
  name,
  onChange,
  onSubmit,
  params,
  removePristine,
  submitProps,
  touchOnChange,
  validate,
}) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [canBeSubmited, setCanBeSubmited] = useState<boolean>();

  const newDatas: DataProps[] | undefined =
    datas && !Array.isArray(datas) ? [datas] : datas;

  const handleOnChange = (
    values: Partial<FormData>,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, any>,
    previousValues: Partial<FormData>,
  ): void => {
    if (onChange) {
      onChange(values, dispatch, props, previousValues);
    }

    if (autosave) {
      setCanBeSubmited(true);

      if (Object.keys(diff(values, previousValues)).length > 0) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        setTimeoutId(
          setTimeout(() => {
            if (canBeSubmited) {
              dispatch(submit(name));
            }
          }, 1000),
        );
      }
    }
  };

  return (
    <FormRender
      actions={actions}
      asyncChangeFields={asyncChangeFields}
      asyncValidate={asyncValidate}
      bodyProps={bodyProps}
      cancelProps={cancelProps}
      className={className}
      destroyOnUnmount={destroyOnUnmount}
      enableReinitialize={enableReinitialize}
      footerProps={footerProps}
      forceUnregisterOnUnmount={forceUnregisterOnUnmount}
      hideSubmitButton={hideSubmitButton}
      id={id}
      initialValues={initialValues || (newDatas && initializeValues(newDatas))}
      isSubmissive={isSubmissive}
      keepDirtyOnReinitialize={keepDirtyOnReinitialize}
      name={name}
      onChange={handleOnChange}
      onSubmit={onSubmit}
      removePristine={removePristine}
      submitProps={submitProps}
      touchOnChange={touchOnChange}
      validate={validate}
    >
      {newDatas &&
        newDatas.map((props: DataProps) => (
          <Data
            key={hash(props)}
            {...props}
            formName={name}
            params={{
              ...params,
            }}
          />
        ))}
      {children}
    </FormRender>
  );
};

export default Form;
