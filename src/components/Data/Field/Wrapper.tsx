import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { DataFieldProps, FormidableContext } from '../../../index';
import Column from '../../Column';

const CustomBottomSC = styled.div`
  float: right;
`;

const CustomTopSC = styled.div`
  float: right;
`;

const FieldLabelSC = styled.label``;
const WrapperSC = styled.div``;

const FieldWrapper: FC<DataFieldProps> = ({
  children,
  column,
  columnProps,
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

  const WrapperCmp = column ? Column : WrapperSC;
  const props = column
    ? columnProps
    : {
        as: sc && sc.fieldWrapper,
      };

  return (
    <WrapperCmp {...props} {...wrapperProps}>
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
    </WrapperCmp>
  );
};
export default FieldWrapper;
