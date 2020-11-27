import React, { ReactNode, SyntheticEvent, useContext } from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import Button from '../Button';
import { DataProps } from '../Data';

const FormSC = styled.form``;
const FormBodySC = styled.div``;
const FormFooterSC = styled.div``;

const MessageSC = styled.div``;

interface FormRenderProps {
  bodyClassName?: string;
  cancelLabel?: string;
  cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  className?: string;
  datas?: DataProps[];
  destroyOnUnmount?: boolean;
  enableReinitialize?: boolean;
  errorValues?: any;
  forceUnregisterOnUnmount?: boolean;
  formValues?: any;
  footerClassName?: string;
  id?: string;
  name: string;
  submitLabel?: string;
}

const Form: React.FC<
  FormRenderProps & InjectedFormProps<any, FormRenderProps>
> = props => {
  const {
    bodyClassName,
    cancelLabel = 'cancel',
    cancelOnClick,
    children,
    className,
    error,
    // errorValues,
    footerClassName,
    // formValues,
    handleSubmit,
    id,
    invalid,
    name,
    pristine,
    submitLabel = 'form/submit',
    submitting,
    valid,
  } = props;

  const { t } = useContext(FormidableContext);

  return (
    <FormSC
      className={className}
      id={id}
      name={`${name}-form`}
      onSubmit={handleSubmit}
    >
      <FormBodySC className={bodyClassName}>
        {children}
        {error && <MessageSC>{t ? t(error) : error}</MessageSC>}
      </FormBodySC>
      <FormFooterSC className={footerClassName}>
        {cancelOnClick && (
          <Button onClick={cancelOnClick}>
            {t ? t(cancelLabel) : cancelLabel}
          </Button>
        )}
        <Button
          disabled={invalid || pristine || submitting || !valid}
          type="submit"
        >
          {t ? t(submitLabel) : submitLabel}
        </Button>
      </FormFooterSC>
    </FormSC>
  );
};

type StateProps = {
  destroyOnUnmount: boolean;
  enableReinitialize: boolean;
  forceUnregisterOnUnmount: boolean;
  form: string;
};

const ReduxForm = reduxForm<any, FormRenderProps>({})(Form);

const mapStateToProps = (
  state: DefaultRootState,
  props: FormRenderProps,
): StateProps => ({
  destroyOnUnmount:
    undefined !== props.destroyOnUnmount ? props.destroyOnUnmount : true,
  enableReinitialize: !!props.enableReinitialize,
  forceUnregisterOnUnmount: !!props.forceUnregisterOnUnmount,
  form: props.name,
});

export default connect(mapStateToProps)(ReduxForm);
