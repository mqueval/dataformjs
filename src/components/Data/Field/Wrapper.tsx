import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../../core/functions';
import { DataFieldProps, FormidableContext } from '../../../index';

const CustomBottomSC = styled.div`
  float: right;
`;

const CustomTopSC = styled.div`
  float: right;
`;

interface WrapperProps {
  colAuto?: Property.ColAuto;
  colEnd?: Property.ColEnd | Property.ColEnd[];
  colSpan?: Property.ColSpan | Property.ColSpan[];
  colStart?: Property.ColStart | Property.ColStart[];
  rowAuto?: Property.RowAuto;
  rowEnd?: Property.RowEnd | Property.RowEnd[];
  rowSpan?: Property.RowSpan | Property.RowSpan[];
  rowStart?: Property.RowStart | Property.RowStart[];
}

const FieldLabelSC = styled.label``;
const WrapperSC = styled.div<
  WrapperProps & {
    theme?: any;
  }
>`
  ${props => createStyles(props, props.theme.breakpoints)}
`;

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
    <WrapperSC as={sc && sc.fieldWrapper} {...wrapperProps}>
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
    </WrapperSC>
  );
};
export default FieldWrapper;
