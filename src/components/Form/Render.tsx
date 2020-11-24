import React, { ReactNode, useContext } from 'react';
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

interface FormProps {
  bodyClassName?: string;
  children?: ReactNode;
  className?: string;
  datas?: DataProps[];
  destroyOnUnmount?: boolean;
  enableReinitialize?: boolean;
  errorValues?: any;
  forceUnregisterOnUnmount?: boolean;
  formValues?: any;
  footerClassName?: string;
  name: string;
  submitLabel?: string;
}

const Form: React.FC<FormProps & InjectedFormProps<any, FormProps>> = props => {
  const {
    bodyClassName,
    children,
    className,
    error,
    // errorValues,
    footerClassName,
    formValues,
    handleSubmit,
    invalid,
    name,
    pristine,
    submitLabel = 'form/submit',
    submitting,
    valid,
  } = props;

  const { t } = useContext(FormidableContext);

  return (
    <FormSC className={className} name={`${name}-form`} onSubmit={handleSubmit}>
      <FormBodySC className={bodyClassName}>
        {children}
        {error && <MessageSC>{t ? t(error) : error}</MessageSC>}
      </FormBodySC>
      <FormFooterSC className={footerClassName}>
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

const ReduxForm = reduxForm<any, FormProps>({})(Form);

const mapStateToProps = (
  state: DefaultRootState,
  props: FormProps,
): StateProps => ({
  destroyOnUnmount:
    undefined !== props.destroyOnUnmount ? props.destroyOnUnmount : true,
  enableReinitialize: !!props.enableReinitialize,
  forceUnregisterOnUnmount: !!props.forceUnregisterOnUnmount,
  form: props.name,
});

export default connect(mapStateToProps)(ReduxForm);
