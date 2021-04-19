import React, { FC } from 'react';
import styled from 'styled-components';

import { GridProps } from '../Grid';

const ColumnsSC = styled.div<GridProps>`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }

  > * + * {
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin-left: 1.5rem;
      margin-top: 0;
    }
  }
`;

const Columns: FC<GridProps> = ({ children, className }) => (
  <ColumnsSC className={className}>{children}</ColumnsSC>
);

export default Columns;
