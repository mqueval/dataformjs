import styled from '@emotion/styled';
import React, { FC, useContext } from 'react';

import { createStyles } from '../../core/functions';
import { FormidableContext } from '../../index';
import HTMLElementProps from '../../props';

export type GridProps = HTMLElementProps;

const GridSC = styled.div<GridProps>`
  display: grid;
  gap: ${props =>
    !props.gap &&
    !props.g &&
    !props.rowGap &&
    !props.gX &&
    !props.columnGap &&
    !props.gY &&
    props.theme.spacing[props.theme.defaultSpace]};
  ${createStyles};
`;

const Grid: FC<GridProps> = ({ children, className, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <GridSC
      as={sc && sc.grid}
      {...props}
      className={`${className ? `${className} ` : ''}grid`}
    >
      {children}
    </GridSC>
  );
};
export default Grid;
