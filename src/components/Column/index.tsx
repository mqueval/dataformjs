import React, { FC } from 'react';
import styled from 'styled-components';

const ColumnEl = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Column: FC<{
  className?: string;
}> = ({ children, className }) => (
  <ColumnEl className={className}>{children}</ColumnEl>
);

export default Column;
