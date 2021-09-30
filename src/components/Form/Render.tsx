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
  const { sc } = useContext(FormidableContext);

  if (!values) {
    return null;
  }

  const tmp: (FormActionProps | FormDivActionProps)[] = Array.isArray(values)
    ? values
    : [values];

  return (
    <>
      {tmp.map((a: FormActionProps | FormDivActionProps) => {
        if ((a as FormDivActionProps).actions) {
          const div = a as FormDivActionProps;

          return (
            <div
              key={`form_actions_div_${objectHash(div.actions)}`}
              className={div.className}
            >
              {div.actions.map(({ label, ...actionProps }, i) => (
                <ButtonSC
                  key={`form_actions_${objectHash({ id, label, index: i })}`}
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
              key={`form_actions_${objectHash({ id, label, index: i })}`}
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
    bodyProps,
    cancelProps,
    children,
    className,
    error,
    // errorValues,
    footerProps,
    // formValues,
    handleSubmit,
    hideSubmitButton = false,
    id,
    isSubmissive = true,
    // invalid,
    name,
    pristine,
    removePristine = false,
    submitProps,
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
      <FormBodySC {...bodyProps}>
        {children}
        {error && (
          <MessageSC as={sc && sc.formMessage} status="error">
            {t ? t(error) : error}
          </MessageSC>
        )}
      </FormBodySC>
      <FormFooterSC {...footerProps}>
        <Actions id={id} values={actions} />
        {cancelProps?.onClick && (
          <ButtonSC as={sc && sc.button} {...cancelProps}>
            {t
              ? t(cancelProps?.label || 'cancel')
              : cancelProps?.label || 'cancel'}
          </ButtonSC>
        )}

        {!hideSubmitButton && (
          <ButtonSC
            as={sc && sc.button}
            {...submitProps}
            disabled={
              // !isSubmissive || invalid || pristine || submitting || !valid
              !isSubmissive || (!removePristine && pristine) || submitting
            }
            type="submit"
          >
            {(submitProps?.label ||
              (!submitProps?.iconLeft && !submitProps?.iconRight)) &&
              (t
                ? t(submitProps?.label || 'submit')
                : submitProps?.label || 'submit')}
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
  keepDirtyOnReinitialize?: boolean;
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
  keepDirtyOnReinitialize: !!props.keepDirtyOnReinitialize,
  touchOnChange:
    undefined !== props.touchOnChange ? props.touchOnChange : false,
});

export default connect(mapStateToProps)(ReduxForm);
