import React, { FC } from 'react';
import styled from 'styled-components';

import { GridProps } from '../Grid';

const RowsSC = styled.div<GridProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  > * + * {
    margin-top: 1.5rem;
  }
`;

const Rows: FC<GridProps> = ({ children, className }) => (
  <RowsSC className={className}>{children}</RowsSC>
);

export default Rows;
