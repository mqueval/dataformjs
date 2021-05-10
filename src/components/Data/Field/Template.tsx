import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const CustomActionSC = styled.div``;
const FieldMessageSC = styled.div``;
const FieldTemplateSC = styled.div``;

const FieldTemplate: FC<WrappedFieldProps & DataFieldProps> = ({
  children,
  customAction,
  customActionProps,
  templateProps,
  message,
  meta: { error, touched, warning },
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <FieldTemplateSC as={sc && sc.fieldTemplate} {...templateProps}>
      {children}

      {customAction && (
        <CustomActionSC as={sc && sc.customTop} {...customActionProps}>
          {customAction}
        </CustomActionSC>
      )}

      {touched &&
        ((error && (
          <FieldMessageSC as={sc && sc.fieldMessage} status="error">
            {t ? t(error) : error}
          </FieldMessageSC>
        )) ||
          (warning && (
            <FieldMessageSC as={sc && sc.fieldMessage} status="warning">
              {t ? t(warning) : warning}
            </FieldMessageSC>
          )))}
      {message && (
        <FieldMessageSC as={sc && sc.fieldMessage}>
          {t ? t(message) : message}
        </FieldMessageSC>
      )}
    </FieldTemplateSC>
  );
};

export default FieldTemplate;
