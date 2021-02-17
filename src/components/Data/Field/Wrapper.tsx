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
  columnOptions,
  componentType,
  customBottom,
  customBottomClassName,
  customInfos,
  customInfosClassName,
  customTop,
  customTopClassName,
  id,
  label,
  name,
}) => {
  const { t, sc } = useContext(FormidableContext);

  if ('hidden' === componentType) {
    return <>{children}</>;
  }

  const WrapperCmp = column ? Column : WrapperSC;
  const props = column ? columnOptions : {};

  return (
    <WrapperCmp className="wrapper" {...props}>
      {customInfos && (
        <CustomTopSC as={sc && sc.customTop} className={customInfosClassName}>
          {customInfos}
        </CustomTopSC>
      )}
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
    </WrapperCmp>
  );
};
export default FieldWrapper;
