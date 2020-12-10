import React, { ReactNode, SyntheticEvent, useContext } from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../index';
import Button from '../Button';
import { DataProps } from '../Data';

const FormSC = styled.form``;
const FormBodySC = styled.div``;
const FormFooterSC = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${props => props.theme.spacing.l};
`;

const MessageSC = styled.div``;

interface FormRenderProps {
  bodyClassName?: string;
  cancelIcon?: ReactNode;
  cancelLabel?: string;
  cancelOnClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  cancelStatus?: string;
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
  isSubmissive?: boolean;
  name: string;
  submitIcon?: ReactNode;
  submitLabel?: string;
  touchOnChange?: boolean;
}

const Form: React.FC<
  FormRenderProps & InjectedFormProps<any, FormRenderProps>
> = props => {
  const {
    bodyClassName,
    cancelIcon,
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
    id,
    isSubmissive = true,
    // invalid,
    name,
    pristine,
    submitIcon,
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
        <div>
          {cancelOnClick && (
            <Button
              iconLeft={cancelIcon}
              onClick={cancelOnClick}
              status={cancelStatus}
            >
              {t ? t(cancelLabel) : cancelLabel}
            </Button>
          )}
        </div>

        <Button
          disabled={
            // !isSubmissive || invalid || pristine || submitting || !valid
            !isSubmissive || pristine || submitting
          }
          iconRight={submitIcon}
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
  touchOnChange?: boolean;
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
  touchOnChange:
    undefined !== props.touchOnChange ? props.touchOnChange : false,
});

export default connect(mapStateToProps)(ReduxForm);
