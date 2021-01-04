import React, { ReactNode, SyntheticEvent, useContext } from 'react';
import { connect, DefaultRootState } from 'react-redux';
import { Dispatch } from 'redux';
import { DecoratedFormProps, InjectedFormProps, reduxForm } from 'redux-form';
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
  asyncValidate?: (
    values: FormData,
    dispatch: Dispatch<any>,
    props: DecoratedFormProps<FormData, any>,
    blurredField: string,
  ) => Promise<any>;
  asyncChangeFields?: string[];
  bodyClassName?: string;
  cancelClassName?: string;
  cancelIcon?: ReactNode;
  cancelIconColor?: string;
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
  hideSubmitButton?: boolean;
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
              className={cancelClassName}
              iconColor={cancelIconColor}
              iconLeft={cancelIcon}
              onClick={cancelOnClick}
              status={cancelStatus}
            >
              {t ? t(cancelLabel) : cancelLabel}
            </Button>
          )}
        </div>

        {!hideSubmitButton && (
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
