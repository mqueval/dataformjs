import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const FieldMessageSC = styled.div``;
const FieldLabelSC = styled.label``;
const FieldSC = styled.div``;

const CustomBottomSC = styled.div.attrs(props => ({
  className: classNames(props.className, 'float-right'),
}))``;

const CustomTopSC = styled.div.attrs(props => ({
  className: classNames(props.className, 'float-right'),
}))``;

const FieldTemplate: FC<WrappedFieldProps & DataFieldProps> = ({
  children,
  className,
  customBottom,
  customBottomClassName,
  customTop,
  customTopClassName,
  id,
  input: { name },
  label,
  meta: { error, touched, warning },
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <FieldSC as={sc && sc.field} className={className}>
      {customTop && (
        <CustomTopSC as={sc && sc.customTop} className={customTopClassName}>
          {customTop}
        </CustomTopSC>
      )}
      <FieldLabelSC as={sc && sc.label} htmlFor={id}>
        {t ? t(label || name) : label || name}
      </FieldLabelSC>

      <div>
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
      </div>
      {customBottom && (
        <CustomBottomSC
          as={sc && sc.customBottom}
          className={customBottomClassName}
        >
          {customBottom}
        </CustomBottomSC>
      )}
    </FieldSC>
  );
};

export default FieldTemplate;
