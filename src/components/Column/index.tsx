import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';

const ColumnSC = styled.div`
  align-self: auto;
  display: flex;
  flex-direction: column;
  order: 0;
  width: 100%;
`;

const Column: FC = ({ children, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <ColumnSC as={sc && sc.column} {...props}>
      {children}
    </ColumnSC>
  );
};

export default Column;
