import React, { FC } from 'react';
import styled from 'styled-components';

import { GridProps } from '../Grid';

const ColumnSC = styled.div<GridProps>`
  align-self: auto;
  display: flex;
  flex-direction: column;
  order: 0;
  width: 100%;

  padding: ${props =>
    `${
      props.theme.spacing &&
      (props.spacingY
        ? props.theme.spacing[props.spacingY]
        : props.theme.spacing.xs)
    } ${
      props.theme.spacing &&
      (props.spacingX
        ? props.theme.spacing[props.spacingX]
        : props.theme.spacing.xs)
    }`};
`;

const Column: FC<GridProps> = ({ children, className, spacingX, spacingY }) => (
  <ColumnSC className={className} spacingX={spacingX} spacingY={spacingY}>
    {children}
  </ColumnSC>
);

export default Column;
