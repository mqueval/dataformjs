import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { DataFieldProps, FormidableContext } from '../../../index';
import Box from '../../Box';

const CustomBottomSC = styled.div`
  float: right;
`;

const CustomTopSC = styled.div`
  float: right;
`;

const FieldLabelSC = styled.label``;

const FieldWrapper: FC<DataFieldProps> = ({
  children,
  componentType,
  customBottom,
  customBottomProps,
  customInfos,
  customInfosProps,
  customTop,
  customTopProps,
  id,
  label,
  labelShow = true,
  name,
  wrapperProps,
}) => {
  const { t, sc } = useContext(FormidableContext);

  if ('hidden' === componentType) {
    return <>{children}</>;
  }

  return (
    <Box {...wrapperProps}>
      {customInfos && (
        <CustomTopSC as={sc && sc.customTop} {...customInfosProps}>
          {customInfos}
        </CustomTopSC>
      )}
      {customTop && (
        <CustomTopSC as={sc && sc.customTop} {...customTopProps}>
          {customTop}
        </CustomTopSC>
      )}

      {labelShow && (
        <FieldLabelSC as={sc && sc.fieldLabel} htmlFor={id}>
          {t ? t(label || name) : label || name}
        </FieldLabelSC>
      )}
      {children}

      {customBottom && (
        <CustomBottomSC as={sc && sc.customBottom} {...customBottomProps}>
          {customBottom}
        </CustomBottomSC>
      )}
    </Box>
  );
};
export default FieldWrapper;
