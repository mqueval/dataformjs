import React, { FC } from 'react';
import styled from 'styled-components';

import { GridProps } from '../Grid';

const ColumnSC = styled.div<GridProps>`
  align-self: auto;
  display: flex;
  flex-direction: column;
  order: 0;
  width: 100%;
`;

const Column: FC<GridProps> = ({ children, className }) => (
  <ColumnSC className={className}>{children}</ColumnSC>
);

export default Column;
