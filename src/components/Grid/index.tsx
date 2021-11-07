import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../core/functions';
import { FormidableContext } from '../../index';

export interface GridProps {
  cols?: Property.GridTemplateColumns | Property.GridTemplateColumns[];
  gap?: Property.Gap | Property.Gap[];
  gapX?: Property.RowGap | Property.RowGap[];
  gapY?: Property.ColumnGap | Property.ColumnGap[];
  rows?: Property.GridTemplateRows | Property.GridTemplateRows[];
  flow?: Property.GridAutoFlow | Property.GridAutoFlow[];
  justifyItems?: Property.JustifyItems | Property.JustifyItems[];
  spaceX?: Property.Space | Property.Space[];
  spaceY?: Property.Space | Property.Space[];
}

const GridSC = styled.div<GridProps>`
  display: grid;
  column-gap: ${props => !props.gap && !props.gapX && !props.gapY && '1.5rem'};
  ${createStyles};
`;

const Grid: FC<GridProps> = ({ children, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <GridSC as={sc && sc.grid} {...props}>
      {children}
    </GridSC>
  );
};
export default Grid;
