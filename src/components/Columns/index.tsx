import React, { FC } from 'react';
import styled from 'styled-components';

import { GridProps } from '../Grid';

const ColumnsSC = styled.div<GridProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  > * + * {
    margin-left: 1.5rem;
  }
`;

const Columns: FC<GridProps> = ({ children, className }) => (
  <ColumnsSC className={className}>{children}</ColumnsSC>
);

export default Columns;
