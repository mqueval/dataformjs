import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const FieldMessageSC = styled.div``;

const FieldSC = styled.div``;

const FieldTemplate: FC<WrappedFieldProps & DataFieldProps> = ({
  children,
  className,
  input: { name },
  meta: { error, touched, warning },
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <FieldSC as={sc && sc.field} className={className}>
      {children}

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
    </FieldSC>
  );
};

export default FieldTemplate;
