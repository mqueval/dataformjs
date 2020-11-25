import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import { WrappedFieldProps } from 'redux-form';
import styled from 'styled-components';

import { FormidableContext } from '../../../index';
import { DataFieldProps } from './index';

const FieldMessageSC = styled.div``;
const FieldSC = styled.div.attrs(props => ({
  className: classNames(props.className, 'pb-2'),
}))``;

const CustomBottomSC = styled.div.attrs(props => ({
  className: classNames(props.className, 'float-right'),
}))``;

const CustomTopSC = styled.div.attrs(props => ({
  className: classNames(props.className, 'float-right'),
}))``;

const FieldTemplate: FC<WrappedFieldProps &
  DataFieldProps & { id: string }> = ({
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
  const { t, theme } = useContext(FormidableContext);

  return (
    <FieldSC as={theme && theme.field} className={className}>
      {customTop && (
        <CustomTopSC
          as={theme && theme.customTop}
          className={customTopClassName}
        >
          {customTop}
        </CustomTopSC>
      )}
      <label htmlFor={id}>{t ? t(label || name) : label || name}</label>

      <div>
        {children}

        {touched &&
          ((error && (
            <FieldMessageSC as={theme && theme.fieldMessage} status="error">
              {t ? t(error) : error}
            </FieldMessageSC>
          )) ||
            (warning && (
              <FieldMessageSC as={theme && theme.fieldMessage} status="warning">
                {t ? t(warning) : warning}
              </FieldMessageSC>
            )))}
      </div>
      {customBottom && (
        <CustomBottomSC
          as={theme && theme.customBottom}
          className={customBottomClassName}
        >
          {customBottom}
        </CustomBottomSC>
      )}
    </FieldSC>
  );
};

export default FieldTemplate;
