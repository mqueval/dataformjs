import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { FormidableContext } from '../../index';

const ColumnsSC = styled.div`
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

const Columns: FC = ({ children, ...props }) => {
  const { sc } = useContext(FormidableContext);

  return (
    <ColumnsSC as={sc && sc.columns} {...props}>
      {children}
    </ColumnsSC>
  );
};

export default Columns;
