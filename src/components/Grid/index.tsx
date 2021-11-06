import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../core/functions';
import { FormidableContext } from '../../index';

export interface GridProps {
  cols?: Property.GridCols;
  gap?: string | number;
  gapX?: string | number;
  gapY?: string | number;
  rows?: Property.GridRows;
  flow?: Property.GridFlow;
}

const GridSC = styled.div<GridProps & { theme?: any }>`
  display: grid;
  ${props => createStyles(props, props.theme.breakpoints)};
  ${props => {
    if (props.gap) {
      return {
        gap: props.gap,
      };
    }

    return css`
      column-gap: ${props.gapX};
      row-gap: ${props.gapY};
    `;
  }};
`;

const Grid: FC<GridProps> = ({
  children,
  gapX = '1.5rem',
  gapY = 0,
  ...props
}) => {
  const { sc } = useContext(FormidableContext);

  return (
    <GridSC as={sc && sc.grid} gapX={gapX} gapY={gapY} {...props}>
      {children}
    </GridSC>
  );
};
export default Grid;
