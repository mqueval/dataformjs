import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../core/functions';
import { FormidableContext } from '../../index';

export interface BoxProps {
  colAuto?: Property.ColAuto | Property.ColAuto[];
  colEnd?: Property.GridColumnEnd | Property.GridColumnEnd[];
  colSpan?: Property.ColSpan | Property.ColSpan[];
  colStart?: Property.GridColumnStart | Property.GridColumnStart[];
  content?: Property.AlignContent | Property.AlignContent[];
  direction?: Property.FlexDirection | Property.FlexDirection[];
  justifySelf?: Property.JustifySelf | Property.JustifySelf[];
  order?: Property.Order | Property.Order[];
  rowAuto?: Property.RowAuto | Property.RowAuto[];
  rowEnd?: Property.GridRowEnd | Property.GridRowEnd[];
  rowSpan?: Property.RowSpan | Property.RowSpan[];
  rowStart?: Property.GridRowStart | Property.GridRowStart[];
  sticky?: number;
}

const BoxSC = styled.div<BoxProps>`
  align-self: auto;
  display: flex;
  flex-direction: ${props => !props.direction && 'column'};
  width: 100%;

  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${createStyles}
`;

const Box: FC<BoxProps> = ({ children, order = 0, sticky, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <BoxSC as={sc && sc.box} order={order} {...props}>
      {sticky ? (
        <div className={`sticky top-${sticky}`}>{children}</div>
      ) : (
        children
      )}
    </BoxSC>
  );
};

export default Box;
