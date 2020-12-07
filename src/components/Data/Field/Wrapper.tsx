import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { DataFieldProps, FormidableContext } from '../../../index';

const CustomBottomSC = styled.div`
  float: right;
`;

const CustomTopSC = styled.div`
  float: right;
`;

const FieldLabelSC = styled.label``;

const FieldWrapper: FC<DataFieldProps> = ({
  children,
  customBottom,
  customBottomClassName,
  customTop,
  customTopClassName,
  id,
  label,
  name,
}) => {
  const { t, sc } = useContext(FormidableContext);

  return (
    <div>
      {customTop && (
        <CustomTopSC as={sc && sc.customTop} className={customTopClassName}>
          {customTop}
        </CustomTopSC>
      )}
      <FieldLabelSC as={sc && sc.label} htmlFor={id}>
        {t ? t(label || name) : label || name}
      </FieldLabelSC>
      <div>{children}</div>
      {customBottom && (
        <CustomBottomSC
          as={sc && sc.customBottom}
          className={customBottomClassName}
        >
          {customBottom}
        </CustomBottomSC>
      )}
    </div>
  );
};
export default FieldWrapper;
