import React, { FC } from 'react';
import styled from 'styled-components';

const ColumnsEl = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > div {
    margin-right: 1.5rem;
  }

  > div:last-child {
    margin-right: 0;
  }
`;

const Columns: FC<{
  className?: string;
}> = ({ children, className }) => (
  <ColumnsEl className={className}>{children}</ColumnsEl>
);

export default Columns;
