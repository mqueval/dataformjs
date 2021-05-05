import objectHash from 'object-hash';
import React, { FC, ReactNode, useContext } from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { Dispatch } from 'redux';
import { DecoratedFormProps, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import { FormActionProps, FormDivActionProps, FormProps } from './index';

const ButtonSC = styled.button``;
const FormSC = styled.form``;
const FormBodySC = styled.div``;
const FormFooterSC = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MessageSC = styled.div``;

interface FormRenderProps extends FormProps {
  children?: ReactNode;
  errorValues?: any;
  formValues?: any;
}

const Actions: FC<{
  id?: string;
  values?: FormActionProps | FormActionProps[] | FormDivActionProps[];
}> = ({ id, values }) => {
  if (!values) {
    return null;
  }

  const { sc } = useContext(FormidableContext);

  const tmp: (FormActionProps | FormDivActionProps)[] = Array.isArray(values)
    ? values
    : [values];

  return (
    <>
      {tmp.map((a: FormActionProps | FormDivActionProps) => {
        if ((a as FormDivActionProps).actions) {
          const div = a as FormDivActionProps;

          return (
            <div className={div.className}>
              {div.actions.map(({ label, ...actionProps }, i) => (
                <ButtonSC
                  key={objectHash({ id, label, index: i })}
                  as={sc && sc.button}
                  {...actionProps}
                >
                  {label}
                </ButtonSC>
              ))}
            </div>
          );
        }

        return ((Array.isArray(a) ? a : [a]) as FormActionProps[]).map(
          ({ label, ...actionProps }, i) => (
            <ButtonSC
              key={objectHash({ id, label, index: i })}
              as={sc && sc.button}
              {...actionProps}
            >
              {label}
            </ButtonSC>
          ),
        );
      })}
    </>
  );
};

const Form: React.FC<
  FormRenderProps & InjectedFormProps<any, FormRenderProps>
> = props => {
  const {
    actions,
    bodyClassName,
    cancelClassName,
    cancelIcon,
    cancelIconColor,
    cancelLabel = 'cancel',
    cancelOnClick,
    cancelStatus,
    children,
    className,
    error,
    // errorValues,
    footerClassName,
    // formValues,
    handleSubmit,
    hideSubmitButton = false,
    id,
    isSubmissive = true,
    // invalid,
    name,
    pristine,
    submitClassName,
    submitIcon,
    submitIconColor,
    submitIconLeft,
    submitIconRight,
    submitIconSize,
    submitLabel = 'form/submit',
    submitting,
    // valid,
  } = props;

  const { sc, t } = useContext(FormidableContext);

  return (
    <FormSC
      as={sc && sc.form}
      className={className}
      id={id}
      name={`${name}-form`}
      onSubmit={handleSubmit}
    >
      <FormBodySC className={bodyClassName}>
        {children}
        {error && (
          <MessageSC as={sc && sc.fieldMessage} status="error">
            {t ? t(error) : error}
          </MessageSC>
        )}
      </FormBodySC>
      <FormFooterSC className={footerClassName}>
        <Actions id={id} values={actions} />
        {cancelOnClick && (
          <ButtonSC
            as={sc && sc.button}
            className={cancelClassName}
            iconColor={cancelIconColor}
            iconLeft={cancelIcon}
            onClick={cancelOnClick}
            status={cancelStatus}
          >
            {t ? t(cancelLabel) : cancelLabel}
          </ButtonSC>
        )}

        {!hideSubmitButton && (
          <ButtonSC
            as={sc && sc.button}
            className={submitClassName}
            disabled={
              // !isSubmissive || invalid || pristine || submitting || !valid
              !isSubmissive || pristine || submitting
            }
            iconColor={submitIconColor}
            iconLeft={submitIconLeft || submitIcon}
            iconRight={submitIconRight}
            iconSize={submitIconSize}
            type="submit"
          >
            {!submitIcon && (t ? t(submitLabel) : submitLabel)}
          </ButtonSC>
        )}
      </FormFooterSC>
    </FormSC>
  );
};

type StateProps = {
  asyncChangeFields?: string[];
  asyncValidate?: (
    values: FormData,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, any>,
    blurredField: string,
  ) => Promise<any>;
  destroyOnUnmount: boolean;
  enableReinitialize: boolean;
  forceUnregisterOnUnmount: boolean;
  form: string;
  touchOnChange?: boolean;
};

const ReduxForm = reduxForm<any, FormRenderProps>({})(Form);

const mapStateToProps = (
  state: DefaultRootState,
  props: FormRenderProps,
): StateProps => ({
  asyncChangeFields: props.asyncChangeFields,
  asyncValidate: props.asyncValidate,
  destroyOnUnmount:
    undefined !== props.destroyOnUnmount ? props.destroyOnUnmount : true,
  enableReinitialize: !!props.enableReinitialize,
  forceUnregisterOnUnmount: !!props.forceUnregisterOnUnmount,
  form: props.name,
  touchOnChange:
    undefined !== props.touchOnChange ? props.touchOnChange : false,
});

export default connect(mapStateToProps)(ReduxForm);
